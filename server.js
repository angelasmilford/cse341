const express = require('express');
const app = express();
 
app.get('/', (req, res) => { // '/' route is the home page
  res.send("Berlinda Milford");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});