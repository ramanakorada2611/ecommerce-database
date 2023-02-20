const { findAllFromDb } = require("../database/connection")

const macbookPage=async(req,res)=>{
    try {
        const macbookPage =await findAllFromDb({},"macbookPage")
        return res.status(200).send({macbookPage:macbookPage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.macbookPageData=macbookPage