# 爬蟲練習專案 - Web Scraping Practice

[![GitHub Pages](https://img.shields.io/badge/demo-online-green.svg)](https://yourusername.github.io/RPA_test/)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

一個專為學習網頁爬蟲設計的完整教學專案，包含練習網站和 Python 爬蟲範例。

## 🎯 專案特色

- 🌐 **練習網站**：包含 iframe 和 AJAX 的簡單網頁
- 🐍 **Python 爬蟲**：使用 Selenium 的完整範例程式
- 📚 **詳細文件**：從部署到執行的完整教學
- 🌍 **多語言支援**：繁中、簡中、英文、日文
- ✨ **純前端**：無需後端伺服器，部署簡單

## 🚀 快速開始

### 1. 部署練習網站

```bash
# Clone 專案
git clone https://github.com/yourusername/RPA_test.git
cd RPA_test

# 本地測試
python3 -m http.server 8000
# 訪問 http://localhost:8000

# 部署到 GitHub Pages
# 請參考 DEPLOYMENT.md
```

### 2. 執行爬蟲

```bash
# 建立虛擬環境
# please type 'python -V' to check your Python version 3.12 -> 312
python -m venv venv
source venv/bin/activate
pip install "pywin32-311-cp312-cp312-win_amd64.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
pip install "setuptools-80.9.0-py3-none-any.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
# 安裝依賴
pip install -r requirements.txt -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org

# 執行爬蟲（記得先更新 test_data.xlsx 中的 URL）
python web_scraper.py
```

## 📂 專案結構

```
RPA_test/
├── 網站檔案
│   ├── index.html          # 主網頁
│   ├── style.css           # 樣式表
│   └── script.js           # JavaScript
│
├── 爬蟲檔案
│   ├── web_scraper.py      # 爬蟲程式
│   ├── test_data.xlsx      # 測試資料
│   └── requirements.txt    # Python 依賴
│
└── 文件
    ├── README.md           # 專案首頁
    ├── DEPLOYMENT.md       # 部署教學
    ├── SCRAPER_GUIDE.md    # 爬蟲指南
    └── README_PROJECT.md   # 完整說明
```

## 📖 文件導覽

| 文件 | 說明 |
|------|------|
| [README.md](README.md) | 專案首頁和快速開始 |
| [README_PROJECT.md](README_PROJECT.md) | 詳細的專案說明 |
| [DEPLOYMENT.md](DEPLOYMENT.md) | GitHub Pages 部署教學 |
| [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md) | 爬蟲設定和使用指南 |
| [CLAUDE.md](CLAUDE.md) | 原始專案需求 |

## 🎓 學習重點

### 網頁開發
- ✅ HTML/CSS/JavaScript 基礎應用
- ✅ iframe 框架的使用
- ✅ AJAX 動態載入
- ✅ 多語言網站設計
- ✅ GitHub Pages 部署

### 網頁爬蟲
- ✅ Selenium WebDriver 操作
- ✅ 動態內容等待處理
- ✅ iframe 切換技巧
- ✅ Excel 資料處理
- ✅ 錯誤處理與除錯

## 🌐 線上展示

網站功能：
- 輸入名稱後生成 SHA256 雜湊值
- 支援繁中、簡中、英文、日文切換
- 包含 iframe 和 AJAX 動態內容
- 適合爬蟲練習和測試

👉 **[查看線上展示](https://yourusername.github.io/RPA_test/)**

## 💻 技術棧

**前端**
- HTML5, CSS3, Vanilla JavaScript
- Web Crypto API

**爬蟲**
- Python 3.8+
- Selenium WebDriver
- Pandas, OpenPyXL

## 📝 使用範例

### 網站操作
1. 在輸入框輸入名稱（例如："Alice"）
2. 點擊「生成結果」按鈕
3. 查看 SHA256 雜湊值（組合名稱+當前日期）
4. iframe 中會顯示相同的結果

### 爬蟲操作
1. 準備 Excel 檔案（name, url 欄位）
2. 執行 `python web_scraper.py`
3. 程式自動訪問網站、輸入資料、提取結果
4. 查看輸出檔案 `test_data_結果.xlsx`

## 🐛 常見問題

**Q: 如何更新網站？**  
A: 修改檔案後，commit 並 push 到 GitHub，GitHub Pages 會自動更新。

**Q: ChromeDriver 錯誤？**  
A: 確保 ChromeDriver 版本與 Chrome 瀏覽器版本相符。詳見 [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)。

**Q: 爬蟲找不到元素？**  
A: 增加等待時間，確保網頁完全載入。可以調整 `time.sleep()` 或 `WebDriverWait` 的時間。

更多問題請查看 [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

可能的改進：
- [ ] 支援更多瀏覽器
- [ ] 增加錯誤重試機制
- [ ] 多執行緒爬取
- [ ] 增加更多練習情境

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

本專案用於教育和學習目的，適合：
- 網頁爬蟲初學者
- RPA 自動化學習者
- Python Selenium 練習者

---

**Happy Learning! 祝您學習愉快！🚀**

如有任何問題，歡迎開啟 Issue 討論。