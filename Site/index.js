const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 5000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/',(req,res)=>{
  return res.render('home')
})
