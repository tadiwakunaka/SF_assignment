
module.exports = function(db, app, ObjectID) {
  // Defining a POST endpoint for adding a user
  app.post('/api/addUser', async function(req, res) {
    // Check if request body is not empty
    if (!req.body) {
      return res.sendStatus(400); // Return bad request status if body is empty
    }

    // Extract the user data from the request body
    const user = req.body;
    const collection = db.collection('users'); // Access the 'users' collection in the database

    // Check if the user already exists in the collection
    const existingUser = await collection.findOne({ 'username': user.username.toString() });

    // If the user does not exist, create a new user
    if (!existingUser) {
      const newUser = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        superAdmin: false,
        groupAdmin: [],
        groups: [],
        bannedFrom: []
      };

      // Insert the new user into the collection
      collection.insertOne(newUser, (err, dbres) => {
        // If there is an error during insertion, send an error response
        if (err) {
          console.log("Username is not unique");
          res.send({ ok: false }); // Send response indicating failure
        } else {
          console.log("File written successfully\n");
          res.send({ ok: true }); // Send response indicating success
        }
      });
    }
  });
};


