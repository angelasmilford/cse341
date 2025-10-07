// server.js
//console.log('May Node be with you')


const express = require('express')
const app = express()


// Creates a server that browsers can connect to, using Express's listen method
app.listen(3000, function () {
  console.log('listening on 3000')
})


// Handles a GET request
//app.get(endpoint, callback) // endpoint == the value that comes after domain name
// endpoint == "/profile"
//callback == tells the server what to do once the requested endpoint matches the endpoint stated


//app.get('/', function (req, res) { // request object and response object
//  res.send('Hello World') // Writes 'Hello World' back to the server.
//})


// We normally abbreviate `request` to `req` and `response` to `res`.
//app.get('/', function (req, res) {
  // do something here
//})


//app.get('/', (req, res) => {
//  res.send('Hello World')
//})


// urlencoded: tells express to extract data from the <form> element and add them to the body property in the request object
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
  res.render(view, locals)
  // view == name of the file we're rendering
  // locals == the data passed into the file
// Middlewares and other routes here...


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') // sweve up an index.html page back to the browser
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})


//app.post('/quotes', (req, res) => {
//  console.log('Hellooooooooooooooooo!')
//})


app.post('/quotes', (req, res) => {
  console.log(req.body)
})


const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb-connection-string', (err, client) => {

})


MongoClient.connect(connectionString).then(
//  mongodb+srv://angelamilford123_db_user:3cshA7jS4nPc9dSc@cluster0.z5nl8jm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  console.log('Connected to Database')
).catch(error => console.error(error))

MongoClient.connect(connectionString).then(
  console.log('Connected to Database')
//    const db = client.db('star-wars-quotes')
)

MongoClient.connect(/* ... */)
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    app.use(/* ... */)
    app.get(/* ... */)
    app.post(/* ... */)
    app.listen(/* ... */)
  })
  .catch(console.error)


MongoClient.connect(/* ... */).then(client => {
  // ...
  const db = client.db('star-wars-quotes')
  const quotesCollection = db.collection('quotes')

  // ...
})


app.post('/quotes', (req, res) => {
  quotesCollection
    .insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
})


app.post('/quotes', (req, res) => {
  quotesCollection
    .insertOne(req.body)
    .then(result => {
      res.redirect('/') // redirect: asks the browser to redirect back to '/'
    })
    .catch(error => console.error(error))
})


app.get('/', (req, res) => {
  const cursor = db.collection('quotes').find() // returns a cursor which won't make sense if you tried logging it
  console.log(cursor)
  // ...
})

app.get('/', (req, res) => {
  db.collection('quotes')
    .find()
    .toArray() // Converts data into an array
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
  // ...
})


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray().then(/* ... */).catch(/* ... */)
  res.render('index.ejs', {})
})


app.get('/', (req, res) => {
  db.collection('quotes')
    .find()
    .toArray()
    .then(results => {
      res.render('index.ejs', { quotes: results })
    })
    .catch(/* ... */)
})


app.use(express.static('public'))


/* CRUD
* Create == POST
* Read == GET
* Update == PUT
* Delete == DELETE
*/