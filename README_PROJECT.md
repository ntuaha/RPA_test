# 爬蟲練習專案 - Web Scraping Practice

這是一個專為學習網頁爬蟲設計的教學專案，包含一個簡單的練習網站和對應的 Python 爬蟲範例。

## 📝 專案簡介

本專案包含兩個主要部分：

1. **練習網站**：一個簡單的網頁應用程式，包含 iframe 和 AJAX 功能
2. **爬蟲程式**：使用 Selenium 編寫的 Python 爬蟲範例

這個專案非常適合：
- 學習網頁爬蟲的初學者
- 練習處理 iframe 和動態內容
- 了解如何使用 Selenium 進行網頁自動化

## 🌐 網站功能

練習網站提供以下功能：

- ✅ **多語言支援**：繁體中文、簡體中文、英文、日文
- ✅ **動態內容**：使用 JavaScript 生成 SHA256 雜湊值
- ✅ **iframe 框架**：包含 iframe 載入的動態內容
- ✅ **AJAX 載入**：模擬非同步資料載入
- ✅ **簡潔介面**：樸素的設計，專注於爬蟲練習

## 🚀 快速開始

### 網站部署

1. **部署到 GitHub Pages**
   
   請參閱 [DEPLOYMENT.md](DEPLOYMENT.md) 獲取完整的部署指南。

   簡易步驟：
   ```bash
   # 1. 推送程式碼到 GitHub
   git add .
   git commit -m "Add web scraping practice site"
   git push origin main
   
   # 2. 在 GitHub repository 設定中啟用 GitHub Pages
   # Settings > Pages > Source > 選擇 main 分支
   ```

2. **本地測試**
   
   ```bash
   # 使用 Python 的簡單 HTTP 伺服器
   python3 -m http.server 8000
   
   # 在瀏覽器中訪問
   # http://localhost:8000
   ```

### 爬蟲設定與執行

詳細說明請參閱 [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)。

快速開始：

```bash
# 1. 建立虛擬環境
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate  # Windows

# 2. 安裝依賴套件
pip install -r requirements.txt

# 3. 安裝 ChromeDriver（請參閱 SCRAPER_GUIDE.md）

# 4. 修改 test_data.xlsx 中的 URL 為您部署的網站地址

# 5. 執行爬蟲
python web_scraper.py
```

## 📂 專案結構

```
RPA_test/
├── index.html              # 主網頁
├── style.css               # 樣式表
├── script.js               # JavaScript 功能
├── web_scraper.py          # Python 爬蟲程式
├── test_data.xlsx          # Excel 測試資料
├── requirements.txt        # Python 套件依賴
├── DEPLOYMENT.md           # 網站部署教學
├── SCRAPER_GUIDE.md        # 爬蟲使用指南
├── README_PROJECT.md       # 專案說明（本檔案）
└── CLAUDE.md               # 專案需求文件
```

## 🛠️ 技術棧

### 網站前端
- HTML5
- CSS3
- Vanilla JavaScript
- Web Crypto API (SHA256)

### 爬蟲後端
- Python 3.8+
- Selenium WebDriver
- Pandas
- OpenPyXL

## 📖 文件說明

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - 詳細的 GitHub Pages 部署教學
- **[SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)** - 爬蟲環境設定和使用指南
- **[CLAUDE.md](CLAUDE.md)** - 原始專案需求和規格
- **[README_PROJECT.md](README_PROJECT.md)** - 專案總覽（本檔案）

## 🎯 學習目標

完成這個專案後，您將掌握：

### 網頁開發
- [x] HTML/CSS/JavaScript 基礎
- [x] iframe 的使用
- [x] 動態內容載入（AJAX）
- [x] 多語言網站實現
- [x] GitHub Pages 部署

### 網頁爬蟲
- [x] Selenium WebDriver 使用
- [x] 元素定位和操作
- [x] 等待機制（隱式、顯式）
- [x] iframe 切換
- [x] Excel 資料讀寫
- [x] Python 虛擬環境管理

## 📊 測試流程

1. **部署網站**到 GitHub Pages
2. **更新** `test_data.xlsx` 中的 URL
3. **執行爬蟲**程式
4. **檢查結果**檔案 `test_data_結果.xlsx`
5. **驗證** SHA256 雜湊值是否正確

## 🔍 網站運作原理

1. 使用者在輸入框中輸入名稱（例如："Alice"）
2. 點擊「生成結果」按鈕
3. JavaScript 獲取當前日期（例如："2025-09-30"）
4. 組合字串：名稱 + 日期（例如："Alice2025-09-30"）
5. 計算 SHA256 雜湊值
6. 在主頁面顯示結果
7. 同時在 iframe 中動態載入相同的結果

## 🐛 除錯技巧

### 網站除錯
- 使用瀏覽器開發者工具（F12）
- 檢查 Console 中的錯誤訊息
- 使用 Network 標籤查看請求

### 爬蟲除錯
- 移除 `--headless` 模式以查看瀏覽器操作
- 增加 `time.sleep()` 觀察執行過程
- 使用 `print()` 輸出中間變數
- 截圖功能：`driver.save_screenshot('debug.png')`

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 來改進這個專案！

可能的改進方向：
- 增加更多爬蟲練習情境
- 支援其他瀏覽器（Firefox、Edge）
- 增加錯誤重試機制
- 增加進度條顯示
- 支援多執行緒爬取

## 📝 授權

本專案採用 MIT 授權 - 詳見 LICENSE 檔案

## 👨‍💻 作者

本專案由 Claude AI 協助建立，用於教育和學習目的。

## 📞 聯絡方式

如有任何問題或建議，請：
1. 開啟 GitHub Issue
2. 提交 Pull Request
3. 在專案頁面留言

---

**祝您學習愉快！Happy Coding! 🎉**
