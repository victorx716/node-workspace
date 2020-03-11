const crypto = require('crypto')
const express = require('express')
const app = express()

const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {

  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0
      while (counter < 1e9) {
        counter++
      }
      postMessage(counter)
    }
  })

  worker.onmessage = function(myCounter) {
    console.log(myCounter)
  }

  worker.postMessage(counter)
})

app.get('/fast', (req, res) => {
  res.send('this was quite fast!')
})

app.listen(3000)  



