
const path = require("path");
const express = require("express");
const exphbs  = require('express-handlebars');
const port = 8080;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
