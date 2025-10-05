const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//  serverApi: {
//    version: ServerApiVersion.v1,
//    strict: true,
//    deprecationErrors: true,
//  }
// });

const client = new MongoClient(process.env.MONGODB_URI);

let db;

async function connectDB() {
  if(!db) {
    try {
      await client.connect();
      db = client.db("cse341");
      console.log(`Pinged your deployment. You successfully connected to MongoDB!`);
    } catch (err) {
      console.error(`MongoDB connection error:`, err);
    }
  }
  return db;
}

module.exports = connectDB;