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

// async function run() {
//  try {
    // Connect the client to the server	(optional starting in v4.7)
//    await client.connect();

    // Send a ping to confirm a successful connection
//    await client.db("admin").command({ ping: 1 });
    
//    console.log("Pinged your deployment. You successfully connected to MongoDB!");
//  } finally {
    // Ensures that the client will close when you finish/error
//    await client.close();
//  }
// }
// run().catch(console.dir);

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