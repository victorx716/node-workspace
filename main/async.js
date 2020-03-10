const https = require('https')

const start = Date.now()

let doRequest = () => {
  https.request('https://www.wikipedia.org', res => {
    res.on('data', () => {})
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end();
}


doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()