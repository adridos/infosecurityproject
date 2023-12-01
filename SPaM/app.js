
const path = require("path");
const express = require("express");
const exphbs  = require('express-handlebars');
const insert = require('./public/js/insert')
const port = 8080;

// View routers
const homeRouter = require("./public/views/home");
const loginRouter = require("./public/views/login");
const { insertUser } = require("./public/js/insert");
const { MongoClient, ServerApiVersion } = require('mongodb');

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

app.post('/register', async (req, res) => {
  const {client, userName, pass} = req.body;

  await insert.insertUser(client, userName, pass);

  res.send('User registered successfully');
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
