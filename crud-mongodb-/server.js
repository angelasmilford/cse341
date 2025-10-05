// server.js
console.log('May Node be with you')


const express = require('express')
const app = express()


app.listen(3000, function () {
  console.log('listening on 3000')
})


app.get(endpoint, callback)


// We normally abbreviate `request` to `req` and `response` to `res`.
// app.get('/', function (req, res) {
   // do something here
// })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

 app.get('/', (req, res) => {
  res.send('Hello World')
})