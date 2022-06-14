const express = require('express')
const app = express()

//EJS Layouts
const  expressLayouts = require('express-ejs-layouts')

//EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(expressLayouts)

app.get('/', (req, res)=>{
    res.render('inicio')
})

app.listen(3000,()=>{
    console.log('Servidor iniciado. Puerto: 3000')
})