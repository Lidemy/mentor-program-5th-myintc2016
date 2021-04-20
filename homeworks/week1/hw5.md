## 請解釋後端與前端的差異。
前端：使用者介面呈現及畫面互動
後端：執行電腦去索取資料庫裡的資料，或是資料庫如何讓電腦拿取所需要的資料

---

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
使用者的瀏覽器接受到命令，讓電腦的網路卡發出 request 到 google server
google server 再去資料庫索取關於 Javascript 的資料 response 給使用者的網路卡，再由瀏覽器呈現回傳可閱讀排列好的資料


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. clear：當版面太亂，輸入 clear 即會立即給你一個清爽版面；但其實就是直接換行到下一頁面
1. code . :若是使用 VS code 開發，command line 已在專案位置，輸入 code . 即打開 VS code 的該專案文件；Mac 使用者則先開啟 VS code 運行 Shell Command: Install 'code' command in PATH 才可使用
1. cat：在 command line 的視窗預覽檔案內容，如輸入 cat hw5.md