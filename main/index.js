const express = require('express')
const app = express()

let doWork = duration => {
  const start = Date.now()
  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  doWork(5000)
  res.send("test msg 123")
})

app.listen(3000)