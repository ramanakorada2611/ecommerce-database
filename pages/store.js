const express=require('express')
const mainRouter=express.Router()
const storeController=require('../controllers/store')
mainRouter.get('/storePage',storeController.storePageData)
module.exports=mainRouter;