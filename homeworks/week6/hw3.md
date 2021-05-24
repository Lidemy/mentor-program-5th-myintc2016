## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

<section> 和 <article>：有自己明顯含義的區塊 / 內容本身是獨立且完整的區塊；不過這兩個對我而言還是有點類似，較常使用前者。

<strong> 和 <b>：兩者雖然視覺上都是讓文字粗體化，但前者代表著上**重點**。

<video>：用於嵌入影片的標籤。

## 請問什麼是盒模型（box modal）

content width: width (padding + border)

非盒內模型：width + padding + border

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline: 行內元素，無法調整寬高、上下邊距；個人經驗實作上**極少**用到。

block: 區塊元素，可自由調整寬高、上下邊距，自身為一行。

inline-block: 行內區塊元素，結合 inline 和 block 的特色，可併為一行，卻又能自由調整寬高、上下邊距。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static: 預設值，物件按照順序排列下來。

relative: 相對定位，物件按照順序排列下來，但可以調整、自定義位置。

absolute: 絕對定位，物件脫離排列順序，可以調整、自定義位置，但需依據參考點而擺放；參考點為往上一層、非 position: static 的物件，若都沒有將依據 <body> 為參考點。

fixed: 固定定位，以網頁視點（viewpoint）為依據自定義位置。
