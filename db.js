require("dotenv").config()

const mongoose=require("mongoose")
// mongodb+srv://mongodb:mongodb@cluster0.ky1i9dx.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/masai
 const connection=mongoose.connect(process.env.mongoURL)

module.exports=connection
