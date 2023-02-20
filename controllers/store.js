const { findAllFromDb } = require("../database/connection")

const storePage=async(req,res)=>{
    try {
        const storePage =await findAllFromDb({},"storePage")
        return res.status(200).send({storePage:storePage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.storePageData=storePage