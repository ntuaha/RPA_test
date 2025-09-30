// 多語言文字
const translations = {
    'zh-TW': {
        headerTitle: '爬蟲練習網站',
        instructionTitle: '輸入數值以生成結果',
        instructionText: '請在下方輸入框中輸入任意文字，然後點擊按鈕以生成 SHA256 雜湊值。',
        inputLabel: '輸入名稱：',
        generateBtn: '生成結果',
        resultTitle: '結果',
        inputValueLabel: '輸入值：',
        dateLabel: '日期：',
        combinedLabel: '組合字串：',
        hashLabel: 'SHA256 雜湊值：',
        iframeTitle: '動態載入內容 (iframe)',
        footerText: '© 2025 爬蟲練習網站 - 僅供教育用途使用',
        placeholder: '請輸入名稱...'
    },
    'zh-CN': {
        headerTitle: '爬虫练习网站',
        instructionTitle: '输入数值以生成结果',
        instructionText: '请在下方输入框中输入任意文字，然后点击按钮以生成 SHA256 哈希值。',
        inputLabel: '输入名称：',
        generateBtn: '生成结果',
        resultTitle: '结果',
        inputValueLabel: '输入值：',
        dateLabel: '日期：',
        combinedLabel: '组合字符串：',
        hashLabel: 'SHA256 哈希值：',
        iframeTitle: '动态加载内容 (iframe)',
        footerText: '© 2025 爬虫练习网站 - 仅供教育用途使用',
        placeholder: '请输入名称...'
    },
    'en': {
        headerTitle: 'Web Scraping Practice',
        instructionTitle: 'Enter Value to Generate Result',
        instructionText: 'Please enter any text in the input box below and click the button to generate a SHA256 hash value.',
        inputLabel: 'Enter Name:',
        generateBtn: 'Generate Result',
        resultTitle: 'Result',
        inputValueLabel: 'Input Value:',
        dateLabel: 'Date:',
        combinedLabel: 'Combined String:',
        hashLabel: 'SHA256 Hash:',
        iframeTitle: 'Dynamically Loaded Content (iframe)',
        footerText: '© 2025 Web Scraping Practice - For Educational Purposes Only',
        placeholder: 'Enter name...'
    },
    'ja': {
        headerTitle: 'ウェブスクレイピング練習サイト',
        instructionTitle: '値を入力して結果を生成',
        instructionText: '下の入力ボックスに任意のテキストを入力し、ボタンをクリックして SHA256 ハッシュ値を生成してください。',
        inputLabel: '名前を入力：',
        generateBtn: '結果を生成',
        resultTitle: '結果',
        inputValueLabel: '入力値：',
        dateLabel: '日付：',
        combinedLabel: '結合文字列：',
        hashLabel: 'SHA256 ハッシュ値：',
        iframeTitle: '動的に読み込まれたコンテンツ (iframe)',
        footerText: '© 2025 ウェブスクレイピング練習サイト - 教育目的のみ',
        placeholder: '名前を入力してください...'
    }
};

// 語言切換函數
function changeLanguage() {
    const lang = document.getElementById('lang').value;
    const t = translations[lang];
    
    document.getElementById('header-title').textContent = t.headerTitle;
    document.getElementById('instruction-title').textContent = t.instructionTitle;
    document.getElementById('instruction-text').textContent = t.instructionText;
    document.getElementById('input-label').textContent = t.inputLabel;
    document.getElementById('generateBtn').textContent = t.generateBtn;
    document.getElementById('result-title').textContent = t.resultTitle;
    document.getElementById('input-value-label').textContent = t.inputValueLabel;
    document.getElementById('date-label').textContent = t.dateLabel;
    document.getElementById('combined-label').textContent = t.combinedLabel;
    document.getElementById('hash-label').textContent = t.hashLabel;
    document.getElementById('iframe-title').textContent = t.iframeTitle;
    document.getElementById('footer-text').innerHTML = t.footerText;
    document.getElementById('nameInput').placeholder = t.placeholder;
}

// SHA256 雜湊函數
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// 獲取當前日期
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 生成結果函數
async function generateResult() {
    const nameInput = document.getElementById('nameInput').value.trim();
    
    if (!nameInput) {
        alert('請輸入名稱！');
        return;
    }
    
    // 獲取當前日期
    const currentDate = getCurrentDate();
    
    // 組合字串：名稱 + 日期
    const combinedString = nameInput + currentDate;
    
    // 計算 SHA256
    const hashValue = await sha256(combinedString);
    
    // 顯示結果
    document.getElementById('inputValue').textContent = nameInput;
    document.getElementById('currentDate').textContent = currentDate;
    document.getElementById('combinedString').textContent = combinedString;
    document.getElementById('hashResult').textContent = hashValue;
    document.getElementById('resultSection').style.display = 'block';
    
    // 使用 AJAX 載入 iframe 內容
    loadIframeContent(nameInput, currentDate, hashValue);
}

// 使用 AJAX 載入 iframe 內容
function loadIframeContent(name, date, hash) {
    // 顯示 iframe section
    document.getElementById('iframeSection').style.display = 'block';
    
    // 創建 iframe 內容的 HTML
    const iframeContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    margin: 0;
                }
                .ajax-content {
                    background-color: rgba(255, 255, 255, 0.1);
                    padding: 20px;
                    border-radius: 8px;
                    backdrop-filter: blur(10px);
                }
                h2 {
                    margin-top: 0;
                    color: #fff;
                }
                .data-item {
                    margin: 10px 0;
                    padding: 10px;
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                }
                .hash-display {
                    word-break: break-all;
                    font-family: 'Courier New', monospace;
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 10px;
                    border-radius: 4px;
                    margin-top: 5px;
                }
            </style>
        </head>
        <body>
            <div class="ajax-content" id="ajaxContent">
                <h2>🔄 透過 AJAX 動態載入的內容</h2>
                <div class="data-item">
                    <strong>📝 名稱：</strong>${name}
                </div>
                <div class="data-item">
                    <strong>📅 日期：</strong>${date}
                </div>
                <div class="data-item">
                    <strong>🔐 SHA256 雜湊值：</strong>
                    <div class="hash-display" id="hashValue">${hash}</div>
                </div>
                <div class="data-item">
                    <strong>⏰ 載入時間：</strong>${new Date().toLocaleString()}
                </div>
            </div>
            <script>
                // 模擬 AJAX 延遲載入效果
                document.getElementById('ajaxContent').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('ajaxContent').style.transition = 'opacity 0.5s';
                    document.getElementById('ajaxContent').style.opacity = '1';
                }, 100);
            </script>
        </body>
        </html>
    `;
    
    // 將內容寫入 iframe
    const iframe = document.getElementById('resultFrame');
    iframe.srcdoc = iframeContent;
}

// 頁面載入時設定預設語言
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage();
});
