const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8080

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

//Render's the home.hbs file
app.get('/', (request, response) => {
    response.render('home', {
      name: 'Mike and Adriana'
    }) 
  })