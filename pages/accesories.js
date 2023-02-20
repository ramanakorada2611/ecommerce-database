const express=require('express')
const mainRouter=express.Router()
const accesoriesController=require('../controllers/accesories')
mainRouter.get('/accesoriesPage',accesoriesController.accesoriesPageData)
module.exports=mainRouter;