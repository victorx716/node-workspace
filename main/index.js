const cluster = require('cluster')

if (cluster.isMaster) {
  cluster.fork()
  // cluster.fork()
  // cluster.fork()
  // cluster.fork()      
} else {
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

  app.get('/fast', (req, res) => {
    res.send('this was quite fast!')
  })
  
  app.listen(3000)  
}


