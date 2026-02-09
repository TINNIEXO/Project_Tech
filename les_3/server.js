const express = require('express')
const app = express()
const port = 4000
const fs = require('fs')


const users = JSON.parse(
  fs.readFileSync('./data/users.json', 'utf8')
)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {  
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/login', (req, res) => { 
  res.send('Log in en match!')
})

app.get('/profile', (req, res) => { 
  res.send('Profile page')
})

app.get('/profile/:username', (req, res) => {
  const username = req.params.username
  res.send(`Welkom op het profiel van ${username}`)
})









app.use((req, res) => {
  res.status(404).send('404 - Pagina niet gevonden')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


