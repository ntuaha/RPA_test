# GitHub Pages 部署教學

本文件說明如何將此爬蟲練習網站部署到 GitHub Pages。

## 📋 前置準備

1. 確保您已經有 GitHub 帳號
2. 確保您的專案已經推送到 GitHub repository
3. 確保網頁檔案（index.html、style.css、script.js）都在 repository 中

## 🚀 部署步驟

### 方法一：使用 GitHub Pages 設定（推薦）

1. **登入 GitHub**
   - 前往您的 repository 頁面

2. **進入設定頁面**
   - 點擊 repository 頁面上方的 `Settings`（設定）標籤

3. **找到 GitHub Pages 設定**
   - 在左側選單中，找到 `Pages` 選項並點擊

4. **設定 Source（來源）**
   - 在 `Source` 區域，選擇要部署的分支
   - 如果您的網頁檔案在主分支，選擇 `main` 或 `master`
   - 如果您建立了專門的分支，選擇該分支名稱
   - 資料夾通常選擇 `/ (root)`

5. **儲存設定**
   - 點擊 `Save` 按鈕

6. **等待部署完成**
   - GitHub 會自動開始部署程序
   - 通常需要 1-5 分鐘完成
   - 部署完成後，頁面會顯示網站的 URL
   - URL 格式：`https://<您的帳號>.github.io/<repository名稱>/`

### 方法二：使用 gh-pages 分支

如果您想要將網頁放在專門的 `gh-pages` 分支：

1. **建立 gh-pages 分支**
   ```bash
   # 切換到一個新的孤立分支
   git checkout --orphan gh-pages
   
   # 刪除所有檔案（除了網頁相關檔案）
   git rm -rf .
   
   # 複製或移動您的網頁檔案到這個分支
   # 確保 index.html 在根目錄
   ```

2. **提交並推送**
   ```bash
   git add index.html style.css script.js
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **設定 GitHub Pages**
   - 前往 repository 的 Settings > Pages
   - 選擇 `gh-pages` 分支作為來源
   - 點擊 Save

## ✅ 驗證部署

1. **檢查部署狀態**
   - 在 repository 頁面，點擊 `Actions` 標籤
   - 您會看到 GitHub Pages 的部署工作流程
   - 確認狀態為綠色勾勾（成功）

2. **訪問網站**
   - 使用 GitHub Pages 提供的 URL 訪問您的網站
   - 測試所有功能是否正常運作

## 🔧 常見問題

### 問題 1：網站顯示 404 錯誤

**解決方法：**
- 確認 `index.html` 檔案在正確的位置（根目錄或您設定的資料夾）
- 檢查檔案名稱是否正確（必須是 `index.html`，全部小寫）
- 等待幾分鐘，有時需要一些時間才能生效

### 問題 2：CSS 和 JavaScript 沒有載入

**解決方法：**
- 檢查 HTML 中的檔案路徑是否正確
- 使用相對路徑而非絕對路徑
- 確保所有檔案都已推送到 repository

### 問題 3：更新後網站沒有變化

**解決方法：**
- 清除瀏覽器快取
- 等待幾分鐘讓 GitHub Pages 重新部署
- 使用無痕模式檢視網站

## 📝 更新網站

當您需要更新網站內容時：

1. **修改檔案**
   ```bash
   # 在本地修改檔案
   # 例如：編輯 index.html
   ```

2. **提交變更**
   ```bash
   git add .
   git commit -m "更新網站內容"
   git push origin main  # 或您的分支名稱
   ```

3. **等待自動部署**
   - GitHub Pages 會自動偵測變更並重新部署
   - 通常需要 1-3 分鐘

## 🌐 自訂網域（選擇性）

如果您有自己的網域名稱：

1. **設定 DNS**
   - 在您的網域提供商設定 CNAME 記錄
   - 指向 `<您的帳號>.github.io`

2. **在 GitHub 設定自訂網域**
   - Settings > Pages > Custom domain
   - 輸入您的網域名稱
   - 儲存設定

3. **啟用 HTTPS**
   - 勾選 `Enforce HTTPS` 選項

## 📚 相關資源

- [GitHub Pages 官方文件](https://docs.github.com/en/pages)
- [自訂網域設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions 工作流程](https://docs.github.com/en/actions)

## 💡 提示

- 建議在部署前先在本地測試網站功能
- 可以使用簡單的 HTTP 伺服器測試：`python3 -m http.server 8000`
- 保持檔案結構簡單，避免複雜的路徑設定
- 定期檢查 GitHub Actions 的執行狀態

---

如有任何問題，請查閱 [GitHub Pages 文件](https://docs.github.com/en/pages) 或在 repository 中開啟 Issue。
