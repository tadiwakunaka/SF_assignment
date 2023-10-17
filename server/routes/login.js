
module.exports = function(db, app) {
  // Defining a POST endpoint for user login
  app.post('/api/login', async function (req, res) {
    const users = req.body;

    if (!users) {
      return res.sendStatus(400);
    }

    const collection = db.collection('users'); // Accessing the 'users' collection in the database

    // Finding the user with the given username and password
    await collection.find({'username': users.username.toString(), 'password': users.password.toString()}).toArray((err, data) => {
      if (err) {
        // Handle the error appropriately, possibly with a 500 status code
        console.error(err);
        return res.sendStatus(500);
      }

      var user = {};
      if (data.length !== 0){
        user.id = data[0].id;
        user.email = data[0].email;
        user.username = data[0].username;
        user.valid = true;
        user.groups = data[0].groups;
        user.groupAdmin  = data[0].groupAdmin;
        user.superAdmin = data[0].superAdmin;
        user.bannedFrom = data[0].bannedFrom;
        user.avatar = data[0].avatar;
      }else{
        user.valid = false;
      }
      // Sending the user data in the response
      res.send(user);
    });
  });
};




