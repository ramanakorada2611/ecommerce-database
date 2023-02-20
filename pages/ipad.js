const express=require('express')
const mainRouter=express.Router()
const ipadController=require('../controllers/ipad')
mainRouter.get('/ipadPage',ipadController.ipadPageData)
module.exports=mainRouter;