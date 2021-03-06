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
  const M = Number(lines[0])
  for (let i = 1; i <= M; i++) {
    console.log(gameResult(lines[i]))
  }
}

function gameResult(str) {
  const arr = str.split(' ')
  const A = arr[0]
  const B = arr[1]
  const K = Number(arr[2])
  if (A === B) return 'DRAW'
  if (K === 1) return isWinner(A, B) ? 'A' : 'B'
  if (K === -1) return isWinner(A, B) ? 'B' : 'A'
}

function isWinner(A, B) {
  if (A.length === B.length) return A > B
  return A.length > B.length
}
