# 爬蟲練習指南

本指南說明如何設定環境並執行 Python 爬蟲程式來測試網頁。

## 📋 目錄

- [環境需求](#環境需求)
- [安裝步驟](#安裝步驟)
- [執行爬蟲](#執行爬蟲)
- [測試資料](#測試資料)
- [常見問題](#常見問題)

## 🔧 環境需求

- Python 3.8 或以上版本
- Google Chrome 瀏覽器
- ChromeDriver（與 Chrome 版本相符）

## 📦 安裝步驟

### 1. 建立虛擬環境

使用 Python 的 `venv` 模組建立獨立的開發環境：

```bash
# 在專案目錄下建立虛擬環境
python3 -m venv venv

# 啟動虛擬環境
# macOS/Linux:
source venv/bin/activate

# Windows:
venv\Scripts\activate
```

啟動後，您的命令列提示符前面會顯示 `(venv)`。

### 2. 安裝所需套件

```bash
# 使用 requirements.txt 安裝所有依賴套件
pip install -r requirements.txt
```

這將安裝以下套件：
- **selenium**: 網頁自動化和爬蟲框架
- **pandas**: 資料處理和 Excel 讀寫
- **openpyxl**: Excel 檔案處理引擎

### 3. 安裝 ChromeDriver

#### 方法一：手動下載（推薦）

1. **檢查 Chrome 版本**
   - 開啟 Chrome 瀏覽器
   - 前往 `chrome://version/`
   - 查看版本號（例如：120.0.6099.129）

2. **下載對應版本的 ChromeDriver**
   - 前往 [ChromeDriver 下載頁面](https://chromedriver.chromium.org/downloads)
   - 或使用新版下載頁：[Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/)
   - 下載與您的 Chrome 版本相符的 ChromeDriver

3. **安裝 ChromeDriver**
   
   **macOS:**
   ```bash
   # 解壓縮下載的檔案
   unzip chromedriver_mac64.zip
   
   # 移動到系統路徑
   sudo mv chromedriver /usr/local/bin/
   
   # 賦予執行權限
   sudo chmod +x /usr/local/bin/chromedriver
   
   # 移除隔離屬性（macOS 安全性）
   xattr -d com.apple.quarantine /usr/local/bin/chromedriver
   ```
   
   **Linux:**
   ```bash
   unzip chromedriver_linux64.zip
   sudo mv chromedriver /usr/local/bin/
   sudo chmod +x /usr/local/bin/chromedriver
   ```
   
   **Windows:**
   ```bash
   # 解壓縮後，將 chromedriver.exe 移動到 Python Scripts 目錄
   # 或加入系統 PATH 環境變數
   ```

4. **驗證安裝**
   ```bash
   chromedriver --version
   ```

#### 方法二：使用 WebDriver Manager（自動化）

如果您想要自動管理 ChromeDriver：

1. 安裝 webdriver-manager：
   ```bash
   pip install webdriver-manager
   ```

2. 修改 `web_scraper.py` 中的 WebDriver 設定：
   ```python
   from webdriver_manager.chrome import ChromeDriverManager
   from selenium.webdriver.chrome.service import Service
   
   service = Service(ChromeDriverManager().install())
   driver = webdriver.Chrome(service=service, options=chrome_options)
   ```

## 🚀 執行爬蟲

### 1. 準備測試資料

確保您有 `test_data.xlsx` 檔案，其中包含以下欄位：

| name    | url                                          | 答案 |
|---------|----------------------------------------------|------|
| Alice   | https://yourusername.github.io/RPA_test/     |      |
| Bob     | https://yourusername.github.io/RPA_test/     |      |
| Charlie | https://yourusername.github.io/RPA_test/     |      |

**重要**：請將 URL 替換為您實際部署的網站地址！

### 2. 執行爬蟲程式

```bash
# 確保虛擬環境已啟動
# 使用預設的 test_data.xlsx
python web_scraper.py

# 或指定其他 Excel 檔案
python web_scraper.py your_data.xlsx
```

### 3. 查看結果

程式執行完成後，會產生一個新檔案：`test_data_結果.xlsx`

這個檔案會在「答案」欄位中填入爬取到的 SHA256 雜湊值。

## 📊 測試資料說明

### Excel 檔案格式

爬蟲程式需要以下欄位：

- **name**（必要）: 要輸入到網頁的名稱
- **url**（必要）: 目標網頁的完整 URL
- **答案**（自動產生）: 爬取到的 SHA256 雜湊值

### 範例資料

專案中已包含 `test_data.xlsx` 範例檔案，您可以：

1. 直接使用（記得更新 URL）
2. 複製後修改
3. 建立自己的測試資料

## 🔍 程式運作流程

`web_scraper.py` 的執行流程：

1. **讀取 Excel 檔案** - 載入測試資料
2. **初始化瀏覽器** - 啟動 Chrome 瀏覽器
3. **逐行處理資料**：
   - 訪問指定的網址
   - 在輸入框中填入 name 值
   - 點擊「生成結果」按鈕
   - 等待結果顯示
   - 從主頁面提取 SHA256 值
   - 切換到 iframe 並驗證
   - 將結果寫入 DataFrame
4. **儲存結果** - 產生新的 Excel 檔案
5. **關閉瀏覽器** - 清理資源

## 🐛 常見問題

### 問題 1：找不到 ChromeDriver

**錯誤訊息：**
```
selenium.common.exceptions.WebDriverException: 'chromedriver' executable needs to be in PATH
```

**解決方法：**
- 確認 ChromeDriver 已正確安裝
- 檢查 ChromeDriver 是否在系統 PATH 中
- 嘗試使用 webdriver-manager（見安裝步驟）

### 問題 2：ChromeDriver 版本不符

**錯誤訊息：**
```
This version of ChromeDriver only supports Chrome version XX
```

**解決方法：**
- 下載與您的 Chrome 瀏覽器版本相符的 ChromeDriver
- 更新 Chrome 瀏覽器到最新版本

### 問題 3：元素找不到

**錯誤訊息：**
```
selenium.common.exceptions.NoSuchElementException
```

**解決方法：**
- 確認網頁已完全載入
- 增加等待時間（調整 `time.sleep()` 或 `WebDriverWait` 時間）
- 檢查網頁 HTML 結構是否與程式一致

### 問題 4：無法讀取 Excel 檔案

**錯誤訊息：**
```
FileNotFoundError: [Errno 2] No such file or directory: 'test_data.xlsx'
```

**解決方法：**
- 確認 Excel 檔案存在於當前目錄
- 檢查檔案名稱是否正確
- 使用完整路徑指定檔案

### 問題 5：虛擬環境套件未安裝

**錯誤訊息：**
```
ModuleNotFoundError: No module named 'selenium'
```

**解決方法：**
- 確認虛擬環境已啟動（命令列前面應有 `(venv)`）
- 重新執行 `pip install -r requirements.txt`

## 💡 進階技巧

### 1. 使用無頭模式（Headless Mode）

如果您不想顯示瀏覽器視窗，可以在 `web_scraper.py` 中取消註解：

```python
chrome_options.add_argument('--headless')
```

### 2. 調整等待時間

根據網路速度和電腦效能，您可能需要調整等待時間：

```python
# 隱式等待
driver.implicitly_wait(10)

# 顯式等待
WebDriverWait(driver, 20).until(...)

# 固定等待
time.sleep(3)
```

### 3. 處理大量資料

對於大量測試資料，建議：
- 分批處理
- 增加錯誤重試機制
- 定期儲存中間結果

### 4. 除錯模式

在程式中增加更多 print 輸出或使用 Python 除錯器：

```python
import pdb; pdb.set_trace()  # 設定中斷點
```

## 📚 相關資源

- [Selenium 官方文件](https://www.selenium.dev/documentation/)
- [Selenium Python 教學](https://selenium-python.readthedocs.io/)
- [Pandas 官方文件](https://pandas.pydata.org/docs/)
- [ChromeDriver 下載](https://chromedriver.chromium.org/downloads)

## 🎓 學習重點

通過這個練習，您將學會：

1. ✅ 使用 Python 虛擬環境管理套件
2. ✅ 使用 Selenium 進行網頁自動化
3. ✅ 處理 iframe 框架
4. ✅ 等待動態內容載入（AJAX）
5. ✅ 使用 Pandas 讀寫 Excel 檔案
6. ✅ 錯誤處理和除錯技巧

---

如有任何問題或建議，歡迎開啟 Issue 討論！
