const request = require('request')

const baseURL = 'https://lidemy-book-store.herokuapp.com/books' // 將 URL 作為常數
const arge = process.argv // 將陣列記下
const action = arge[2] // 動作
const params = arge[3] // 參數
const params2 = arge[4] // 參數 2

switch (action) {
  case 'list':
    ListBook()
    break
  case 'read':
    GetBook()
    break
  case 'delete':
    DelBook()
    break
  case 'create':
    CreBook()
    break
  case 'update':
    UpdBook()
    break
  default:
    console.log('可執行動作：list / read / delete / create /update')
}

function ListBook() {
  request(`${baseURL}?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id} ${data[i].name}`)
      // 詢問助教：印出來的值，沒有用這個 `${}` 包住，會怎樣嗎？或是說為什麼要包住呢？
    }
  })
}

function GetBook() {
  request(`${baseURL}/${params}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const data = JSON.parse(body)
    console.log('id:'`${data.id} ${data.name}`)
  })
}

function DelBook() {
  request(`${baseURL}/${params}`, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err)
    }
    // console.log(JSON.parse(body)); 因為是刪除，所以不會回傳東西，因此轉印狀態碼
    console.log('status code: ', res && res.statusCode)
  })
}

function CreBook() {
  request.post(
    {
      url: `${baseURL}`,
      form: {
        name: `${params}`
      }
    },
    (err, res, body) => {
      if (err) {
        return console.log('新增失敗', err)
      }
      console.log('新增成功')
    }
  )
}

function UpdBook() {
  request(
    {
      method: 'PATCH',
      url: `${baseURL}/${params}`,
      form: {
        name: `${params2}`
      }
    },
    (err, res, body) => {
      if (err) {
        return console.log('更新失敗', err)
      }
      const data = JSON.parse(body) // JSON 格式的字串
      console.log('id:'`${data.id}', '${data.name}`)
    }
  )
}
