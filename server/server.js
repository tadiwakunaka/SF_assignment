// Import necessary packages and modules
const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// Enable Cross-Origin Resource Sharing (CORS) and JSON parsing
app.use(cors());
app.use(bodyParser.json());
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  }
})

const sockets = require('./socket.js')


// MongoDB connection setup
const url = "mongodb://localhost:27017/";
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

// Main function to establish a connection with MongoDB
async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // name of the database to use
    const dbName = "mychatdb";
    const db = client.db(dbName);
    console.log('Connected to MongoDB successfully!');

    // Include routes for adding a user and user login
    require('./routes/addUser.js')(db, app);
    require('./routes/login.js')(db, app);

    // Start the server and listen for requests
    require('./listen.js')(http, PORT);
  } catch (e) {
    console.log(e);
  }
}
main().catch(console.error);



