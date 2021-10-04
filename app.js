const express = require('express')
var hbs = require('express-handlebars')

const { movies } = require('./data')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(‘public’))
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: ‘index’
  }))

app.get('/', (req, res) => {
  res.render('movies', { movies })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
