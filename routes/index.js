const express = require('express')

const router = express.Router()

const {dishes} = require('./../resources/dishes')

router.get('/',(req,res)=>res.render('index',{'title':'Ejemplo de EJS','data':dishes}))

router.get('/newDish',(req,res)=>res.render('insDish',{'title':'Insertar Registro'}))

router.post('/',(req,res)=>{
    const {idDish,name,value,vegetarian} = req.body
    
    dishes.set(idDish,{'id':idDish,'name':name,'value':value,'vegetarian':vegetarian=='S' ? true : false})

    res.redirect('/')
})

module.exports = router