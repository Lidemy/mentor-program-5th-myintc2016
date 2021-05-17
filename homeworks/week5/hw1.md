## 前四週心得與解題心得

雖然進度很緊湊，但如果有好好分配時間，自律自發去學習，其實應該是沒太大問題。
我的狀況比較像是因為有些基礎或基本認知就心態鬆懈，以至於沒有很認真跟著當週進度走完，
這是我接下來要持續不斷克服和調整心態的地方－「自律」「分配」。

---

解題至今，基本解法大概運行得出，主要不熟兩個地方：內建函式和雙重迴圈。
另外還有細心，有時會寫錯設定或是少寫 / 寫錯（如：n-1 / n）。
對於解題，整理起來就是：熟悉、細心、console.log 大法。

---

補充：後來發現有有趣的小挑戰可以補充些心得，所以先去挑戰『Lidemy HTTP Challenge』
一開始有點忘記，便翻查作業跟資料，隨著關卡前進，回憶也慢慢回來；
不過還是有碰到卡住的地方，例如：Lv4 跟 Lv8（這兩關用 Postman 幫忙:D）
其實兩關原理都差不多，但是輸入 `node api.js 書名` 都會回報 error，
這兩關原理不是跟 Week4 的 hw3 一樣嗎？

```
const request = require('request')

const baseURL =
  'https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}' // 將 URL 作為常數
const baseURL2 = 'https://lidemy-http-challenge.herokuapp.com/api/books?q=' // 將 URL 作為常數
const arge = process.argv // 將陣列記下

request(
  {
    method: 'GET',
    url: `${baseURL2}` + `${id}`
  },
  (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const data = JSON.parse(body) // JSON 格式的字串
    console.log(body)
  }
)
```

其他時候會出錯，其實都是粗心，少加逗號阿，或是代錯 URL 這種小細節...。
至於『Lidemy HTTP Challenge』來到 Lv12 就卡關，不過還是會繼續破下去，因為真的很有趣～
**喜歡這樣利用自己所學，把自己有趣的想法用程式碼展現出來！**
而 LIOJ 1016, 1017 以及 1018 會繼續解，再補上心得，**當作懈怠練習 LIOJ 的熱身題。**

> ###### 我還是真的很喜歡寫 code 跟解題，尤其在夜晚一人的辦公室邊聽音樂，或是像現在深夜一人聽著音樂練習解題跟寫作業。

###### 會持續優化調整學習心態，以準時交作業為主。

最後謝謝 Huli 老師、助教們的指導，敝人會盡力收心，繼續於課程學到扎實的知識。
