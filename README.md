# 爬蟲練習專案 - Web Scraping Practice

[![GitHub Pages](https://img.shields.io/badge/demo-online-green.svg)](https://ntuaha.github.io/RPA_test/)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌍 語言版本 | Language Versions

**[繁體中文](#繁體中文)** | **[English](#english)** | **[日本語](#日本語)** | **[简体中文](#简体中文)**

---

<a name="繁體中文"></a>
## 📖 繁體中文版本

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
git clone https://github.com/ntuaha/RPA_test.git
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
python main.py
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
│   ├── main.py      # 爬蟲程式
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

👉 **[查看線上展示](https://ntuaha.github.io/RPA_test/)**

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
2. 執行 `python main.py`
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

---
---

<a name="english"></a>
## 📖 English Version

A comprehensive tutorial project designed for learning web scraping, including a practice website and Python scraper examples.

## 🎯 Project Features

- 🌐 **Practice Website**: Simple web page with iframe and AJAX
- 🐍 **Python Scraper**: Complete example using Selenium
- 📚 **Detailed Documentation**: Complete tutorial from deployment to execution
- 🌍 **Multi-language Support**: Traditional Chinese, Simplified Chinese, English, Japanese
- ✨ **Pure Frontend**: No backend server required, easy deployment

## 🚀 Quick Start

### 1. Deploy Practice Website

```bash
# Clone the project
git clone https://github.com/ntuaha/RPA_test.git
cd RPA_test

# Local testing
python3 -m http.server 8000
# Visit http://localhost:8000

# Deploy to GitHub Pages
# See DEPLOYMENT.md for details
```

### 2. Run the Scraper

```bash
# Create virtual environment
# please type 'python -V' to check your Python version 3.12 -> 312
python -m venv venv
source venv/bin/activate
pip install "pywin32-311-cp312-cp312-win_amd64.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
pip install "setuptools-80.9.0-py3-none-any.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
# Install dependencies
pip install -r requirements.txt -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org

# Run scraper (remember to update URL in test_data.xlsx)
python main.py
```

## 📂 Project Structure

```
RPA_test/
├── Website Files
│   ├── index.html          # Main web page
│   ├── style.css           # Stylesheet
│   └── script.js           # JavaScript
│
├── Scraper Files
│   ├── main.py      # Scraper program
│   ├── test_data.xlsx      # Test data
│   └── requirements.txt    # Python dependencies
│
└── Documentation
    ├── README.md           # Project homepage
    ├── DEPLOYMENT.md       # Deployment tutorial
    ├── SCRAPER_GUIDE.md    # Scraper guide
    └── README_PROJECT.md   # Complete documentation
```

## 📖 Documentation Guide

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Project homepage and quick start |
| [README_PROJECT.md](README_PROJECT.md) | Detailed project documentation |
| [DEPLOYMENT.md](DEPLOYMENT.md) | GitHub Pages deployment tutorial |
| [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md) | Scraper setup and usage guide |
| [CLAUDE.md](CLAUDE.md) | Original project requirements |

## 🎓 Learning Points

### Web Development
- ✅ Basic HTML/CSS/JavaScript applications
- ✅ Usage of iframe frames
- ✅ AJAX dynamic loading
- ✅ Multi-language website design
- ✅ GitHub Pages deployment

### Web Scraping
- ✅ Selenium WebDriver operations
- ✅ Dynamic content waiting handling
- ✅ iframe switching techniques
- ✅ Excel data processing
- ✅ Error handling and debugging

## 🌐 Live Demo

Website features:
- Generate SHA256 hash after entering a name
- Support switching between Traditional Chinese, Simplified Chinese, English, Japanese
- Includes iframe and AJAX dynamic content
- Suitable for scraping practice and testing

👉 **[View Live Demo](https://ntuaha.github.io/RPA_test/)**

## 💻 Tech Stack

**Frontend**
- HTML5, CSS3, Vanilla JavaScript
- Web Crypto API

**Scraper**
- Python 3.8+
- Selenium WebDriver
- Pandas, OpenPyXL

## 📝 Usage Examples

### Website Operations
1. Enter a name in the input box (e.g., "Alice")
2. Click the "Generate Result" button
3. View the SHA256 hash (combination of name + current date)
4. The same result will be displayed in the iframe

### Scraper Operations
1. Prepare Excel file (with name, url columns)
2. Run `python main.py`
3. The program automatically visits the website, enters data, and extracts results
4. Check output file `test_data_結果.xlsx`

## 🐛 FAQ

**Q: How to update the website?**  
A: After modifying files, commit and push to GitHub. GitHub Pages will update automatically.

**Q: ChromeDriver error?**  
A: Ensure ChromeDriver version matches your Chrome browser version. See [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md) for details.

**Q: Scraper can't find elements?**  
A: Increase wait time to ensure the page is fully loaded. You can adjust `time.sleep()` or `WebDriverWait` time.

For more questions, see [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md).

## 🤝 Contributing

Issues and Pull Requests are welcome!

Possible improvements:
- [ ] Support more browsers
- [ ] Add error retry mechanism
- [ ] Multi-threaded scraping
- [ ] Add more practice scenarios

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

This project is for educational and learning purposes, suitable for:
- Web scraping beginners
- RPA automation learners
- Python Selenium practitioners

---

**Happy Learning! 🚀**

If you have any questions, feel free to open an Issue for discussion.

---
---

<a name="日本語"></a>
## 📖 日本語版

ウェブスクレイピングの学習用に設計された総合的なチュートリアルプロジェクトで、練習用ウェブサイトとPythonスクレイパーの例が含まれています。

## 🎯 プロジェクトの特徴

- 🌐 **練習用ウェブサイト**: iframeとAJAXを含むシンプルなウェブページ
- 🐍 **Pythonスクレイパー**: Seleniumを使用した完全な例
- 📚 **詳細なドキュメント**: デプロイから実行までの完全なチュートリアル
- 🌍 **多言語サポート**: 繁体字中国語、簡体字中国語、英語、日本語
- ✨ **純粋なフロントエンド**: バックエンドサーバー不要、簡単なデプロイ

## 🚀 クイックスタート

### 1. 練習用ウェブサイトのデプロイ

```bash
# プロジェクトのクローン
git clone https://github.com/ntuaha/RPA_test.git
cd RPA_test

# ローカルテスト
python3 -m http.server 8000
# http://localhost:8000 にアクセス

# GitHub Pagesへのデプロイ
# 詳細は DEPLOYMENT.md を参照
```

### 2. スクレイパーの実行

```bash
# 仮想環境の作成
# 'python -V' でPythonバージョンを確認してください 3.12 -> 312
python -m venv venv
source venv/bin/activate
pip install "pywin32-311-cp312-cp312-win_amd64.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
pip install "setuptools-80.9.0-py3-none-any.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
# 依存関係のインストール
pip install -r requirements.txt -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org

# スクレイパーの実行（test_data.xlsxのURLを更新することを忘れずに）
python main.py
```

## 📂 プロジェクト構造

```
RPA_test/
├── ウェブサイトファイル
│   ├── index.html          # メインウェブページ
│   ├── style.css           # スタイルシート
│   └── script.js           # JavaScript
│
├── スクレイパーファイル
│   ├── main.py      # スクレイパープログラム
│   ├── test_data.xlsx      # テストデータ
│   └── requirements.txt    # Python依存関係
│
└── ドキュメント
    ├── README.md           # プロジェクトホームページ
    ├── DEPLOYMENT.md       # デプロイチュートリアル
    ├── SCRAPER_GUIDE.md    # スクレイパーガイド
    └── README_PROJECT.md   # 完全なドキュメント
```

## 📖 ドキュメントガイド

| ドキュメント | 説明 |
|--------------|------|
| [README.md](README.md) | プロジェクトホームページとクイックスタート |
| [README_PROJECT.md](README_PROJECT.md) | 詳細なプロジェクトドキュメント |
| [DEPLOYMENT.md](DEPLOYMENT.md) | GitHub Pagesデプロイチュートリアル |
| [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md) | スクレイパーセットアップと使用ガイド |
| [CLAUDE.md](CLAUDE.md) | 元のプロジェクト要件 |

## 🎓 学習ポイント

### ウェブ開発
- ✅ 基本的なHTML/CSS/JavaScriptアプリケーション
- ✅ iframeフレームの使用
- ✅ AJAX動的ロード
- ✅ 多言語ウェブサイト設計
- ✅ GitHub Pagesデプロイ

### ウェブスクレイピング
- ✅ Selenium WebDriverの操作
- ✅ 動的コンテンツの待機処理
- ✅ iframeの切り替え技術
- ✅ Excelデータ処理
- ✅ エラー処理とデバッグ

## 🌐 ライブデモ

ウェブサイトの機能：
- 名前を入力してSHA256ハッシュを生成
- 繁体字中国語、簡体字中国語、英語、日本語の切り替えをサポート
- iframeとAJAX動的コンテンツを含む
- スクレイピングの練習とテストに適しています

👉 **[ライブデモを見る](https://ntuaha.github.io/RPA_test/)**

## 💻 技術スタック

**フロントエンド**
- HTML5, CSS3, Vanilla JavaScript
- Web Crypto API

**スクレイパー**
- Python 3.8+
- Selenium WebDriver
- Pandas, OpenPyXL

## 📝 使用例

### ウェブサイト操作
1. 入力ボックスに名前を入力（例：「Alice」）
2. 「結果を生成」ボタンをクリック
3. SHA256ハッシュを表示（名前+現在の日付の組み合わせ）
4. 同じ結果がiframeに表示されます

### スクレイパー操作
1. Excelファイルを準備（name、url列を含む）
2. `python main.py` を実行
3. プログラムが自動的にウェブサイトにアクセスし、データを入力し、結果を抽出します
4. 出力ファイル `test_data_結果.xlsx` を確認

## 🐛 よくある質問

**Q: ウェブサイトを更新する方法は？**  
A: ファイルを修正した後、GitHubにcommitしてpushします。GitHub Pagesが自動的に更新されます。

**Q: ChromeDriverエラー？**  
A: ChromeDriverのバージョンがChromeブラウザのバージョンと一致していることを確認してください。詳細は[SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)を参照してください。

**Q: スクレイパーが要素を見つけられない？**  
A: ページが完全にロードされるように待機時間を増やしてください。`time.sleep()` または `WebDriverWait` の時間を調整できます。

その他の質問については、[SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)を参照してください。

## 🤝 貢献

IssueとPull Requestを歓迎します！

改善の可能性：
- [ ] より多くのブラウザをサポート
- [ ] エラーリトライメカニズムを追加
- [ ] マルチスレッドスクレイピング
- [ ] より多くの練習シナリオを追加

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください

## 🙏 謝辞

このプロジェクトは教育および学習目的のもので、以下の方々に適しています：
- ウェブスクレイピング初心者
- RPA自動化学習者
- Python Selenium実践者

---

**Happy Learning! 🚀**

ご質問がありましたら、お気軽にIssueを開いてディスカッションしてください。

---
---

<a name="简体中文"></a>
## 📖 简体中文版本

一个专为学习网页爬虫设计的完整教学项目，包含练习网站和 Python 爬虫范例。

## 🎯 项目特色

- 🌐 **练习网站**：包含 iframe 和 AJAX 的简单网页
- 🐍 **Python 爬虫**：使用 Selenium 的完整范例程序
- 📚 **详细文档**：从部署到执行的完整教学
- 🌍 **多语言支持**：繁中、简中、英文、日文
- ✨ **纯前端**：无需后端服务器，部署简单

## 🚀 快速开始

### 1. 部署练习网站

```bash
# Clone 项目
git clone https://github.com/ntuaha/RPA_test.git
cd RPA_test

# 本地测试
python3 -m http.server 8000
# 访问 http://localhost:8000

# 部署到 GitHub Pages
# 请参考 DEPLOYMENT.md
```

### 2. 执行爬虫

```bash
# 建立虚拟环境
# please type 'python -V' to check your Python version 3.12 -> 312
python -m venv venv
source venv/bin/activate
pip install "pywin32-311-cp312-cp312-win_amd64.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
pip install "setuptools-80.9.0-py3-none-any.whl" -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org
# 安装依赖
pip install -r requirements.txt -i https://pypi.org/simple --trusted-host pypi.org --trusted-host files.pythonhosted.org

# 执行爬虫（记得先更新 test_data.xlsx 中的 URL）
python main.py
```

## 📂 项目结构

```
RPA_test/
├── 网站文件
│   ├── index.html          # 主网页
│   ├── style.css           # 样式表
│   └── script.js           # JavaScript
│
├── 爬虫文件
│   ├── main.py      # 爬虫程序
│   ├── test_data.xlsx      # 测试数据
│   └── requirements.txt    # Python 依赖
│
└── 文档
    ├── README.md           # 项目首页
    ├── DEPLOYMENT.md       # 部署教学
    ├── SCRAPER_GUIDE.md    # 爬虫指南
    └── README_PROJECT.md   # 完整说明
```

## 📖 文档导览

| 文档 | 说明 |
|------|------|
| [README.md](README.md) | 项目首页和快速开始 |
| [README_PROJECT.md](README_PROJECT.md) | 详细的项目说明 |
| [DEPLOYMENT.md](DEPLOYMENT.md) | GitHub Pages 部署教学 |
| [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md) | 爬虫设置和使用指南 |
| [CLAUDE.md](CLAUDE.md) | 原始项目需求 |

## 🎓 学习重点

### 网页开发
- ✅ HTML/CSS/JavaScript 基础应用
- ✅ iframe 框架的使用
- ✅ AJAX 动态加载
- ✅ 多语言网站设计
- ✅ GitHub Pages 部署

### 网页爬虫
- ✅ Selenium WebDriver 操作
- ✅ 动态内容等待处理
- ✅ iframe 切换技巧
- ✅ Excel 数据处理
- ✅ 错误处理与调试

## 🌐 在线展示

网站功能：
- 输入名称后生成 SHA256 哈希值
- 支持繁中、简中、英文、日文切换
- 包含 iframe 和 AJAX 动态内容
- 适合爬虫练习和测试

👉 **[查看在线展示](https://ntuaha.github.io/RPA_test/)**

## 💻 技术栈

**前端**
- HTML5, CSS3, Vanilla JavaScript
- Web Crypto API

**爬虫**
- Python 3.8+
- Selenium WebDriver
- Pandas, OpenPyXL

## 📝 使用范例

### 网站操作
1. 在输入框输入名称（例如："Alice"）
2. 点击"生成结果"按钮
3. 查看 SHA256 哈希值（组合名称+当前日期）
4. iframe 中会显示相同的结果

### 爬虫操作
1. 准备 Excel 文件（name, url 栏位）
2. 执行 `python main.py`
3. 程序自动访问网站、输入数据、提取结果
4. 查看输出文件 `test_data_結果.xlsx`

## 🐛 常见问题

**Q: 如何更新网站？**  
A: 修改文件后，commit 并 push 到 GitHub，GitHub Pages 会自动更新。

**Q: ChromeDriver 错误？**  
A: 确保 ChromeDriver 版本与 Chrome 浏览器版本相符。详见 [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)。

**Q: 爬虫找不到元素？**  
A: 增加等待时间，确保网页完全加载。可以调整 `time.sleep()` 或 `WebDriverWait` 的时间。

更多问题请查看 [SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

可能的改进：
- [ ] 支持更多浏览器
- [ ] 增加错误重试机制
- [ ] 多线程爬取
- [ ] 增加更多练习情境

## 📄 授权

本项目采用 MIT 授权 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

本项目用于教育和学习目的，适合：
- 网页爬虫初学者
- RPA 自动化学习者
- Python Selenium 练习者

---

**Happy Learning! 祝您学习愉快！🚀**

如有任何问题，欢迎开启 Issue 讨论。