## 請以自己的話解釋 API 是什麼

用於交換資料，有著標準化格式協定的資料庫（函式庫）

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 409 Conflict
   表示請求與伺服器目前狀態衝突

1. 429 Too Many Requests
   表示短期內送出太多需求

1. 502 Bad Gateway
   通常是伺服器的某個服務沒有正確執行

[延伸閱讀](https://httpstatuses.com/)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

#### 餐廳 API 文件

Base URL: https://lidemy-restaurant.com

| 說明             | Method | path             | 參數                     | 範例                    |
| ---------------- | ------ | ---------------- | ------------------------ | ----------------------- |
| 回傳所有餐廳資料 | GET    | /restaurants     | \_limit:限制回傳資料數量 | /restaurants ?\_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                       | /restaurants /10        |
| 新增餐廳         | POST   | /restaurants     | name: 餐廳名             | 無                      |
| 刪除餐廳         | DELETE | /restaurants/:id | 無                       | 無                      |
| 更改餐廳         | PATCH  | /restaurants/:id | name: 餐廳名             | 無                      |

```
[
  {
    "id": 1,
    "name": "風和日麗台菜餐廳"
  },
  {
    "id": 2,
    "name": "藏壽司"
  },
  {
    "id": 3,
    "name": "心粵小廚"
  },
  {
    "id": 4,
    "name": "大戈壁燒烤"
  },
  {
    "id": 5,
    "name": "鬼金棒拉麵"
  },
  {
    "id": 6,
    "name": "種福園"
  },
  {
    "id": 7,
    "name": "雲泰式料理"
  },
  {
    "id": 8,
    "name": "爭鮮迴轉壽司"
  },
  {
    "id": 9,
    "name": "老四川麻辣鍋"
  },
  {
    "id": 10,
    "name": "摩斯漢堡"
  }
]
```
