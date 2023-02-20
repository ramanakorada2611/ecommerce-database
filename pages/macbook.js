const express=require('express')
const mainRouter=express.Router()
const macbookController=require('../controllers/macbook')
mainRouter.get('/macbookPage',macbookController.macbookPageData)
module.exports=mainRouter;