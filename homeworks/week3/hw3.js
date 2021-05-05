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

function isPrime(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i)
    }
  }
  if (arr.length === 2) {
    return true
  } else {
    return false
  }
}

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}