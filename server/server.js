const express = require('express');
const app = express();
const PORT = 3000 ;
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(bodyParser.json());
const url = "mongodb://localhost:27017/";
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function main ()
{
  try {
    await client.connect();
    const dbName = "mychatdb";
    const db = client.db(dbName);
    console.log('Connected to MongoDB successfully!');


    //Import module with correct relative path
    require('./routes/addUser.js')(db,app);
    require('./listen.js')(http,PORT);

  }
  catch(e){
    console.log(e);
  }


}main().catch(console.error);


