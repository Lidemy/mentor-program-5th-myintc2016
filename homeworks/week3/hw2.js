/* eslint no-const-assign: "error" */
/* eslint-env es6 */
const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const num = lines[0].split(' ')
  const n = Number(num[0])
  const m = Number(num[1])
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

function isNarcissistic(i) {
  let key = i
  const digs = i.toString().length // 判斷幾位數
  let sum = 0
  while (key !== 0) {
    const num = key % 10
    sum += num ** digs
    key = Math.floor(key / 10)
  }
  return sum === i
}
