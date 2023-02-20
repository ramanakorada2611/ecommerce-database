const { findAllFromDb } = require("../database/connection")

const ipadPage=async(req,res)=>{
    try {
        const ipadPage =await findAllFromDb({},"ipadPage")
        return res.status(200).send({ipadPage:ipadPage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.ipadPageData=ipadPage