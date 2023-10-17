
module.exports = function(db, app) {
  // Defining a POST endpoint for user login
  app.post('/api/login', async function (req, res) {
    const users = req.body;

    if (!users) {
      return res.sendStatus(400);
    }

    const collection = db.collection('users'); // Accessing the 'users' collection in the database

    // Finding the user with the given username and password
    collection.find({'username': users.username.toString(), 'password': users.password.toString()}).toArray((err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error'); // Sending an internal server error status
      }

      console.log(data); // Logging the retrieved data from the query
      var user = {}; // Initializing an empty user object

      // Checking if data exists for the user
      if (data.length > 0) {
        user = data[0];
      } else {
        console.log("no data");
        user.valid = false;
      }
      res.send(user); // Sending the user data in the response
    });
  });
};



