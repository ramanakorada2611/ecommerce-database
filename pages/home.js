const express=require('express')
const mainRouter=express.Router()
const homeController=require('../controllers/home')
mainRouter.get('/homePage',homeController.homePageData)
module.exports=mainRouter;