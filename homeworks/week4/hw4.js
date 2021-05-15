const request = require('request')

const baseURL = 'https://api.twitch.tv/kraken/games/top' // 將 URL 作為常數
const CLIENT_ID = '83x5bdlro3wx6q849kjw3zuxo4sbk9'

request(
  {
    method: 'GET',
    url: `${baseURL}`,
    headers: {
      'Client-ID': CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  },
  (err, res, body) => {
    const data = JSON.parse(body) // JSON 格式的字串
    const games = data.top
    if (err) {
      return console.log('抓取失敗', err)
    }
    if (data.statusCode === 404) {
      console.log('有錯誤')
    }
    for (let i = 0; i < games.length; i++) {
      console.log(`${games[i].viewers}``${games[i].game.name}`)
    }
  }
)
