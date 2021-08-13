const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => response.render('index'))

app.all('*', (request, response) => response.sendStatus(404))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
