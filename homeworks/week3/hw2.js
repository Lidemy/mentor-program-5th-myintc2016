/* eslint-disable eol-last */
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
  // eslint-disable-next-line
  const y = i
  const digs = i.toString().length // 判斷幾位數
  // eslint-disable-next-line
  const sum = 0
  while (y !== 0) {
    const num = y % 10
    // eslint-disable-next-line
    sum += num ** digs
    // eslint-disable-next-line
    y = Math.floor(y / 10)
  }
  return sum === i
}