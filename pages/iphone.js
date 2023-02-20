const express=require('express')
const mainRouter=express.Router()
const iphoneController=require('../controllers/iphone')
mainRouter.get('/iphonePage',iphoneController.iphonePageData)
module.exports=mainRouter;