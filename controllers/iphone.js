const { findAllFromDb } = require("../database/connection")

const iphonePage=async(req,res)=>{
    try {
        const iphonePage =await findAllFromDb({},"iphonePage")
        return res.status(200).send({iphonePage:iphonePage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.iphonePageData=iphonePage