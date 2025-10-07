// main.js
const update = document.querySelector('#update-button')


//update.addEventListener('click', _ => {
  // Send PUT Request here
//  fetch(endpoint, options)

//})


//update.addEventListener('click', _ => {
//  fetch('/quotes', {
//    method: 'put',
//  })
//})


//update.addEventListener('click', _ => {
//  fetch('/quotes', {
//    method: 'put',
//    headers: { 'Content-Type': 'application/json' },
//  })
//})


update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
      quote: 'I find your lack of faith disturbing.',
    }),
  })
})


app.use(express, json())


app.put('/quotes', (req, res) => {
  console.log(req.body)
})


//quotesCollection
//  .findOneAndUpdate(query, update, options)
//  .then(result => {
//    /* ... */
//  })
//  .catch(error => console.error(error))


//quotesCollection
//  .findOneAndUpdate({ name: 'Yoda' }, update, options)
//  .then(result => {
    /* ... */
//  })
//  .catch(error => console.error(error))


//quotesCollection
//  .findOneAndUpdate(
//    { name: 'Yoda' },
//    {
//      $set: {
//        name: req.body.name,
//        quote: req.body.quote,
//      },
//    },
//    options // tells MongoDB to define additional options for the update request
//  )
//  .then(result => {
    /* ... */
//  })
//  .catch(error => console.error(error))


quotesCollection
  .findOneAndUpdate(
    { name: 'Yoda' },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote,
      },
    },
    {
      upsert: true,
    }
  )
  .then(result => {
    /* ... */
  })
  .catch(error => console.error(error))


app.put('/quotes', (req, res) => {
  quotesCollection.findOneAndUpdate(/* ... */)
    .then(result => {
      console.log(result)
     })
    .catch(error => console.error(error))
})


app.put('/quotes', (req, res) => {
  quotesCollection.findOneAndUpdate(/* ... */)
    .then(result => {
       res.json('Success')
     })
    .catch(error => console.error(error))
})


fetch({
  /* request */
})
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    console.log(response)
  })


// Delete
const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'delete',
  })
})


deleteButton.addEventListener('click', _ => {
  fetch(/* ... */, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader'
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(data => {
      window.location.reload()
    })
})


app.delete('/quotes', (req, res) => {
  // Handle delete event here
})


//quotesCollection
//  .deleteOne(query, options)
//  .then(result => {
    /* ... */
//  })
//  .catch(error => console.error(error))


quotesCollection
  .deleteOne({ name: 'Darth Vader' }, options)
  .then(result => {
    /* ... */
  })
  .catch(error => console.error(error))


app.delete('/quotes', (req, res) => {
  quotesCollection.deleteOne({ name: req.body.name }, options)
})


app.delete('/quotes', (req, res) => {
  quotesCollection.deleteOne({ name: req.body.name })
})


app.delete('/quotes', (req, res) => {
  quotesCollection
    .deleteOne({ name: req.body.name })
    .then(result => {
      res.json(`Deleted Darth Vader's quote`)
    })
    .catch(error => console.error(error))
})


app.delete('/quotes', (req, res) => {
  quotesCollection
    .deleteOne(/* ... */)
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('No quote to delete')
      }
      res.json(`Deleted Darth Vader's quote`)
    })
    .catch(error => console.error(error))
})


const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch(/* ... */)
    .then(/* ... */)
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No Darth Vader quote to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(/* ... */)
})