## hw1：好多星星
沒什麼困難；做 week3 的作業都是先在本機端先寫好 function，再到 LIOJ 轉寫符合其格式。

---

## hw2：水仙花數
在開始第五期課程前有先學過這題，因為知道這題有點複雜，僅先寫下解決步驟便擺到後面再來解，沒想到卡最久的不是這一題。
如何**取每一位數**和**乘平方數**，這段卡住，陷在迴圈搞得很複雜，決定不要浪費時間去看 Huli 的作業檢討，複習了如何取每一位數、得知了乘平方數的簡單寫法，參考解答及結合自己的想法，答出這一題。

---

## hw3：判斷質數
**卡在不會寫輸入範圍**，使用 LIOJ 最讓我挫敗跟卡關很久的地方就是設定輸入範圍。
不知道何時該用 *lines[0]* ，何時又該用 *lines.length* ，是題目會給一行數字或一些數字的差別嗎？
這題的輸入範圍是參考其他人的答案，並且自己也看得懂，而完成的。

---

## hw4：判斷迴文
這題原本要寫得比較冗，要用 ans += 的方式一一拼回翻轉的字，只是又碰到不會寫輸入範圍，開始參考別人答案時，發現有更聰明簡潔的寫法，所以整題都參考了lol

---

## hw5：聯誼順序比大小
花最多時間、挫敗我信心最多的大魔王。
問題 1. 需要考慮**很大的數字**嗎？我看有人有寫 BigInt，有人沒寫

問題 2. 可以幫忙指正原先自己的答案哪裡理解錯誤嗎？謝謝！
```javascript
function compare(a, b, k) {
  if (a === b) {
    return 'DRAW';
  }
  if (k === 1) {
    return a > b ? "A" : "B";
  }
  if (k === -1) {
    return a < b ? "A" : "B";
  }
  const aLength = a.length;
  const bLength = b.length;

  if (aLength !== bLength) {
    return aLength > bLength ? 'A' : 'B';
  }
}

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    const arr = lines[i].split(' ');
    const a = Number(arr[0]);
    const b = Number(arr[1]);
    const k = Number(arr[2]);
    console.log(compare(a, b, k));
  }
}
```