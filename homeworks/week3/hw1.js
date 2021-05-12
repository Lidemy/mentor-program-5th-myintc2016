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
  const n = lines
  let ans = ''
  for (let i = 1; i <= n; i++) {
    ans += '*'
    console.log(ans)
  }
  return ans
}
