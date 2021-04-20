## 跟你朋友介紹 Git

##### 線上建立專案
1. 首先，在 github 註冊帳號後，建立一個 respository

##### 線上專案連結本機端
1. 建立完成會來到專案頁面，在頁面上方有個寫著 **"Code" 的綠色按鍵**
1. 點擊 "Code" 出現小視窗，於 Clone 下方點擊切換 "SSH"，再點擊複製鍵
1. 接著開啟 Command Line，選擇好要放置本機端位置後，使用 git clone 貼上剛才在 github 複製的網址，按下 Enter

##### 上傳新的進度
1. 若有了產出想上傳至線上，使用 **git push**
1. 先輸入 git add . 選取所有**修改** / **新增**的檔案
1. 輸入 git commit-m"Your message"，為此次的上傳留下重點訊息
1. 接著 git push origin Master 完成上傳

##### 下載新的進度
1. 若與人協作或是直接在 github 上修改檔案，使得專案有新進度，而本機端卻尚未更新，使用 **git pull**
1. 輸入 git pull origin <欲更新之分支> 
1. 若有衝突，也是開啟檔案手動解決衝突，也就是將正確的 code 留下，刪去提示字和不需要的 code
