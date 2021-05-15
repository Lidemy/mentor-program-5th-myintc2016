const request = require('request')

const baseURL = 'https://restcountries.eu/rest/v2/name' // 將 URL 作為常數
const arge = process.argv // 將陣列記下
const name = arge[2] // 參數

request(
  {
    method: 'GET',
    url: `${baseURL}/${name}`
  },
  (err, res, body) => {
    if (!name) {
      return console.log('請輸入國家名稱')
    }
    if (err) {
      return console.log('抓取失敗', err)
    }
    const data = JSON.parse(body) // JSON 格式的字串
    if (data.statusCode === 404) {
      console.log('找不到國家資訊')
    }
    for (let i = 0; i < data.length; i++) {
      console.log('============')
      console.log('國家：'`${data[i].name}`)
      console.log('首都：'`${data[i].capital}`)
      console.log('貨幣：'`${data[i].currencies[0].code}`)
      console.log('國碼：'`${data[i].callingCodes[0]}`)
    }
  }
)
