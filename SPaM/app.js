const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8080
const { MongoClient } = require ('mongodb');
const uri = "mongodb+srv://adrianadostine:GrilledCheese1996@cluster0.mfau0rr.mongodb.net/"
const dbName = "SPaM"

//View routers
const homeRouter = require('./public/views/home')
const loginRouter = require('./public/views/login')

const app = express()


app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'public/views/layouts'),
  partialsDir: path.join(__dirname, 'public/views/partials'),
}))

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



//connect to mongoDB 

const client = new MongoClient(uri);

client.connect((err) => {
  if(err){
    console.error('Error connecting to MongoDB:', err);
    return;
  }
})

console.log('Connected to MongoDB');
client.close();

