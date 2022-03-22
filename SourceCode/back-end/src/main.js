const path = require('path')
const handlebars = require('express-handlebars')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

// page1.css
app.use(express.static(path.join(__dirname, 'public')))

// http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine({ extname: '.hbs', defaultLayout: "main"}))
app.set('view engine', 'handlebars')
app.set('views', './views')
app.set('views', path.join(__dirname, 'resources/view'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})