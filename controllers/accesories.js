const { findAllFromDb } = require("../database/connection")

const accesoriesPage=async(req,res)=>{
    try {
        const accesoriesPage =await findAllFromDb({},"accesoriesPage")
        return res.status(200).send({accesoriesPage:accesoriesPage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.accesoriesPageData=accesoriesPage