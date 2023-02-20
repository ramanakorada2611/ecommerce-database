const express=require('express')
const app=express()
const cors=require('cors')

const home=require('./pages/home')
const store=require('./pages/store')
const iphone=require('./pages/iphone')
const ipad=require('./pages/ipad')
const macbook=require('./pages/macbook')
const accesories=require('./pages/accesories')

app.use(cors())
app.use('/',home)
app.use('/',store)
app.use('/',iphone)
app.use('/',ipad)
app.use('/',macbook)
app.use('/',accesories)



app.get('/new',function(req,res){
    console.log("this is home page ")
    res.send({message:"req from home page"})
})
app.listen(5000,()=>{
    console.log("server ruuning at port 5000")
})