const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8080
const {MongoClient, ServerApiVersion} = require('mongodb')

//View routers
const homeRouter = require('./public/views/home')
const loginRouter = require('./public/views/login')

const app = express()

// MongoDB connection URI
const uri = "mongodb+srv://spamadmin:Spamadminpass!23@cluster0.mfau0rr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'public/views/layouts'),
  partialsDir: path.join(__dirname, 'public/views/partials'),
}))

// Create a route to connect to MongoDB and render a template
app.get('/', async (req, res) => {
  try {
    // Connect the client to the MongoDB server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Render a template using Express Handlebars
    res.render('index', { message: "Connected to MongoDB!" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.render('index', { message: "Error connecting to MongoDB" });
  } finally {
    // Ensure that the client closes when you're finished or encounter an error
    await client.close();
  }
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'public/views'))

// Use routers
app.use(express.static(__dirname + '/public'));
app.use('/', homeRouter)
app.use('/', loginRouter)

module.exports = app;