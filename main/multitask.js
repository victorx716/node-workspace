const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

let doRequest = () => {
  https.request('https://www.wikipedia.org', res => {
    res.on('data', () => {})
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  })
  .end();
}


let doHash = () => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start)
  })
}

doRequest()

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()