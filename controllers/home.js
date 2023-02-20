const {findAllFromDb}=require("../database/connection")
const homePage=async(req,res)=>{
    try {
        const homePage =await findAllFromDb({},"homePage")
        return res.status(200).send({homePage:homePage})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
}
module.exports.homePageData=homePage