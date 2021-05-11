const request = require('request')

const baseURL = 'https://lidemy-book-store.herokuapp.com/books?_limit=10' // 將 URL 作為常數

request(`${baseURL}`, (err, res, body) => {
  if (err) {
    return console.log('抓取失敗', err)
  }
  let data
  try {
    data = JSON.parse(body)
  } catch (err) {
    console.log(err)
    return
  }
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].id} ${data[i].name}`)
  }
})
