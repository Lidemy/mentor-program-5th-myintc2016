## 交作業流程

1. git clone 課程資料夾
1. 開新分支 - git branch hw1
1. 切換至 hw1 - git checkout hw1
1. 寫作業
1. 寫完選取有更新的檔案 - git add .
1. 寫上附註 - git commit -m“finish hw1”
1. 推上 git - git push
1. 自我檢討
1. 發 PR，並複製其網址
1. 至學習平台貼上該網址，繳交作業

等作業改完並且 merge 以後：

1. 切換到 master - git checkout master
1. 把最新的改動拉下來 - git pull origin master
1. 刪除已經 merge 的 branch - git branch -d hw1
