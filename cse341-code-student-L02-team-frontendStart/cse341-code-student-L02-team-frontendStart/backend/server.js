const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
 
app.use('/contacts', require('./routes/contacts'));

app.listen(PORT, () => {
  console.log(`Web Server is listening at http://localhost:${PORT}/`);
});