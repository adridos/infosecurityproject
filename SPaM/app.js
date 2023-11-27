const path = require("path");
const express = require("express");
const exphbs  = require('express-handlebars');
const port = 8080;
const { MongoClient, ObjectId } = require('mongodb');

// View routers
const homeRouter = require("./public/views/home");
const loginRouter = require("./public/views/login");

const app = express();

app.engine(".hbs", exphbs.engine({
  defaultLayout: "main",
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "public/views/layouts"),
  partialsDir: path.join(__dirname, "public/views/partials"),
}));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "public/views"));

// Use routers
app.use(express.static(__dirname + "/public"));
app.use("/", homeRouter);
app.use("/", loginRouter);

// Connect to MongoDB
const uri = 'ymongodb+srv://adrianadostine:GrilledCheese1996@cluster0.mfau0rr.mongodb.net/'; // Replace with your actual MongoDB connection string
const dbName = 'spam-db';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
});


app.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const db = client.db(dbName);
    const collection = db.collection('users');

    // Fetch user by ObjectId
    const user = await collection.findOne({ _id: new ObjectId(userId) });

    // Render a page with the fetched username
    res.render('userProfile', { username: user.username });
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
