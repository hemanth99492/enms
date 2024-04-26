const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 

//TESTING
app.get('/klef/test', async function(req, res){
    //res.send("Koneru Lakshmaiah Education Foundation");
    res.json("Koneru Lakshmaiah Education Foundation");
});

app.post('/klef/cse', async function(req, res){
    res.json(req.body);
    //res.json("Computer Science and Engineering");
});

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('ENMS');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//LOGIN MODULE
app.post('/managerlogin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('ENMS');
        users = db.collection('users');
        data = await users.count(req.body);
        conn.close();
        res.send('found');
    }catch(err)
    {
        res.json(err).status(404);
    }
});



//HOME MODULE
app.post('/home/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('ENMS');
        users = db.collection('users');
        data = await users.find(req.body).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/addemp', async (req, res) => {
    try {
      conn = await client.connect();
      db = conn.db('ENMS');
      users = db.collection('users');
      data = await users.insertOne({
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        password: req.body.password,
      });
      conn.close();
      res.send('added'); // Send JSON response with the message and data
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.post('/cp/updatepwd', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('ENMS');
        users = db.collection('users');
        data = await users.updateOne({email : req.body.emailid}, {$set : {pwd : req.body.passwor}});
        conn.close();
        res.json("Password has been updated");
    }catch(err)
    {
        res.json(err).status(404);
    }
});  

app.get('/profiledata', async (req,res)=>{
    try{
        conn = await client.connect();
        db = conn.db('ENMS');
        users = db.collection('users');
        data = await users.findOne({},{emailid : req.body.emailid})
        res.json(data);
        conn.close();
    }
    catch(e){
        console.log(e)
    }
});
app.post('/login/signin', (req, res) => {
    // Handle user login logic here
    // ...
  });
  
  app.post('/login/employee-signin', (req, res) => {
    // Handle employee login logic here
    // ...
  });
  app.post('/apply-leave', async (req, res) => {
    try {
        conn = await client.connect();
      db = conn.db('ENMS');
      users = db.collection('Leave');
      data = await users.insertOne(req.body);
      conn.close();
      res.send('added'); // Send JSON response with the message and data
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/api/user/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Query MongoDB for the user with the provided ID
      const user = await User.findById(userId);
  
      // If user is not found, return 404 Not Found
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // If user is found, return the user data
      res.json(user);
    } catch (error) {
      console.error('Error retrieving user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  