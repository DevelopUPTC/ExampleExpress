const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('public'))


//settings
app.set('PORT',process.env.PORT || 3000 )

console.log( __dirname )

//middlewares
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.listen(app.get('PORT'),()=>console.log(`Server listen at port ${app.get('PORT')}`))