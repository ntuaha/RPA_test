"""
爬蟲練習程式 - 使用 Selenium 爬取網頁資料

此程式會：
1. 讀取 Excel 檔案中的測試資料（name 和 url 欄位）
2. 使用 Selenium 自動化瀏覽器訪問網站
3. 在網頁中輸入 name 值並點擊按鈕
4. 等待 iframe 載入並提取 SHA256 雜湊值
5. 將結果寫回 Excel 的「答案」欄位

使用前請確保：
- 已安裝所需套件（見 requirements.txt）
- 已下載並設定 ChromeDriver
- Excel 檔案格式正確
"""

import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time
import sys


def setup_driver():
    """
    設定並初始化 Chrome WebDriver
    
    Returns:
        webdriver: 設定好的 Chrome WebDriver 實例
    """
    print("正在設定 Chrome WebDriver...")
    
    # Chrome 選項設定
    chrome_options = Options()
    # chrome_options.add_argument('--headless')  # 無頭模式（不顯示瀏覽器視窗），需要時可取消註解
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--window-size=1920,1080')
    
    # 初始化 WebDriver
    # 注意：如果 chromedriver 不在 PATH 中，需要指定完整路徑
    # service = Service('/path/to/chromedriver')
    # driver = webdriver.Chrome(service=service, options=chrome_options)
    
    driver = webdriver.Chrome(options=chrome_options)
    print("WebDriver 設定完成！")
    
    return driver


def scrape_website(driver, url, name):
    """
    爬取網站並獲取 SHA256 雜湊值
    
    Args:
        driver: Selenium WebDriver 實例
        url (str): 目標網站 URL
        name (str): 要輸入的名稱
        
    Returns:
        str: SHA256 雜湊值，如果失敗則返回 None
    """
    try:
        print(f"\n正在處理：{name}")
        print(f"訪問網址：{url}")
        
        # 1. 訪問網頁
        driver.get(url)
        time.sleep(2)  # 等待頁面載入
        
        # 2. 找到輸入框並輸入名稱
        print(f"輸入名稱：{name}")
        input_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "nameInput"))
        )
        input_field.clear()
        input_field.send_keys(name)
        
        # 3. 點擊「生成結果」按鈕
        print("點擊生成按鈕...")
        generate_button = driver.find_element(By.ID, "generateBtn")
        generate_button.click()
        
        # 4. 等待結果區域顯示
        print("等待結果顯示...")
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "resultSection"))
        )
        time.sleep(1)  # 額外等待確保內容完全載入
        
        # 5. 從主頁面獲取 SHA256 雜湊值
        hash_element = driver.find_element(By.ID, "hashResult")
        hash_value = hash_element.text
        print(f"主頁面雜湊值：{hash_value}")
        
        # 6. 等待 iframe 載入並切換到 iframe
        print("等待 iframe 載入...")
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "iframeSection"))
        )
        time.sleep(2)  # 等待 iframe 內容完全載入
        
        # 7. 切換到 iframe 並獲取雜湊值（驗證用）
        iframe = driver.find_element(By.ID, "resultFrame")
        driver.switch_to.frame(iframe)
        
        # 等待 iframe 內容載入
        iframe_hash_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "hashValue"))
        )
        iframe_hash_value = iframe_hash_element.text
        print(f"iframe 雜湊值：{iframe_hash_value}")
        
        # 8. 切換回主頁面
        driver.switch_to.default_content()
        
        # 9. 驗證兩個雜湊值是否一致
        if hash_value == iframe_hash_value:
            print(f"✓ 成功獲取雜湊值：{hash_value}")
            return hash_value
        else:
            print(f"⚠ 警告：主頁面和 iframe 的雜湊值不一致！")
            return hash_value
            
    except Exception as e:
        print(f"✗ 錯誤：{str(e)}")
        # 如果在 iframe 中發生錯誤，切換回主頁面
        try:
            driver.switch_to.default_content()
        except:
            pass
        return None


def process_excel(excel_file, driver):
    """
    處理 Excel 檔案，爬取資料並寫回結果
    
    Args:
        excel_file (str): Excel 檔案路徑
        driver: Selenium WebDriver 實例
    """
    print(f"\n正在讀取 Excel 檔案：{excel_file}")
    
    # 讀取 Excel 檔案
    try:
        df = pd.read_excel(excel_file)
        print(f"成功讀取 {len(df)} 筆資料")
    except Exception as e:
        print(f"錯誤：無法讀取 Excel 檔案 - {str(e)}")
        return
    
    # 檢查必要欄位
    required_columns = ['name', 'url']
    for col in required_columns:
        if col not in df.columns:
            print(f"錯誤：Excel 檔案缺少「{col}」欄位！")
            return
    
    # 如果「答案」欄位不存在，創建它
    if '答案' not in df.columns:
        df['答案'] = ''
    
    # 逐行處理資料
    print("\n開始爬取資料...")
    print("=" * 60)
    
    for index, row in df.iterrows():
        name = row['name']
        url = row['url']
        
        # 檢查資料是否有效
        if pd.isna(name) or pd.isna(url):
            print(f"\n跳過第 {index + 1} 列：資料不完整")
            continue
        
        # 爬取資料
        hash_value = scrape_website(driver, url, name)
        
        # 將結果寫入 DataFrame
        if hash_value:
            df.at[index, '答案'] = hash_value
        else:
            df.at[index, '答案'] = '錯誤：無法獲取資料'
        
        # 每次爬取後稍作休息，避免對伺服器造成過大負擔
        time.sleep(1)
    
    print("\n" + "=" * 60)
    print("爬取完成！")
    
    # 儲存結果到新的 Excel 檔案
    output_file = excel_file.replace('.xlsx', '_結果.xlsx')
    df.to_excel(output_file, index=False)
    print(f"\n結果已儲存至：{output_file}")


def main():
    """
    主函數：執行爬蟲程式
    """
    print("=" * 60)
    print("爬蟲練習程式啟動")
    print("=" * 60)
    
    # Excel 檔案路徑
    excel_file = "test_data.xlsx"
    
    # 檢查是否有提供命令列參數
    if len(sys.argv) > 1:
        excel_file = sys.argv[1]
    
    driver = None
    
    try:
        # 設定 WebDriver
        driver = setup_driver()
        
        # 處理 Excel 檔案
        process_excel(excel_file, driver)
        
    except Exception as e:
        print(f"\n程式執行錯誤：{str(e)}")
        
    finally:
        # 關閉瀏覽器
        if driver:
            print("\n正在關閉瀏覽器...")
            driver.quit()
            print("程式結束")


if __name__ == "__main__":
    main()
