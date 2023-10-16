
module.exports = function(db, app, ObjectID)
{

  app.post('/api/addUser', async function(req, res)
  {
    if(!req.body)
    {
      return res.sendStatus(400);
    }

    const user = req.body;
    const collection = db.collection('users');
    const documents = await collection.findOne({'username':user.username.toString()});
    console.log(documents);

    newUser = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      superAdmin: false,
      groupAdmin: [],
      groups:[],
      bannedFrom:[],
      avatar: ""

    }
    if(documents)
    {
      res.send({num: 0, err: "duplicate item"});
    } else
    {
      collection.insertOne(newUser, (err, dbres)=>{
        console.log("File written successfully\n");
        res.send({ok:true});
      })
    }
  });
}
