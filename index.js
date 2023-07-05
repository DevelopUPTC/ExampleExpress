const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

//settings
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.set('PORT',process.env.PORT || 3000 )
app.set(express.v)


//middlewares
app.use('/',require('./routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server listen at port ${app.get('PORT')}`))