const express = require('express')
var hbs = require('express-handlebars')

const { movies } = require('./data')

const app = express()

app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('movies', { movies })
})

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000')
})
