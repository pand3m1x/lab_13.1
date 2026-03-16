// Require express, mongodb, and dotenv. [x]
// Load environment variables from the .env file. [x]
// Create an Express app instance. [x]
// Define a port (e.g., 3001). [x]
// Use the MongoClient to connect to the database using the URI from your environment variables. [x]

import express from 'express';
import "dotenv/config"
import  { MongoClient }   from 'mongodb';


const app = express();
const port = 3001;

const uri = process.env.MONGO_URI;
 
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
  
try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
    res.status(200).json({message:"Successfully connected to the database!"});
  } catch(err) {
    // Ensures that the client will close when you finish/error
    console.log("Failed to connect to the database.")
    res.status(500).json({message: "Failed to connect to the database."})
  } finally {
    await client.close();
  }
  }
);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

// Create a single GET route at / that, upon a successful database connection, [x]
// sends back a JSON response: { message: "Successfully connected to the database!" }. [x]
// If the connection fails, it should send a 500 status code with a message: 
// { message: "Failed to connect to the database." }. [x]
// Start the server. [x]