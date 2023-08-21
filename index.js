const express=require("express")
const { connection } = require("./db")

require("dotenv").config()
const cors=require("cors")

const { userRouter } = require("./routes/userRoute")
const { appointmentRouter } = require("./routes/appointmentRoute")


const app=express()
app.use(cors())
app.use(express.json())
app.use("/appointments",appointmentRouter)
app.use("/users",userRouter)




app.listen(process.env.port,async()=>{
  
    try {
        await connection
        console.log('connect to db')
        console.log('listening to port 8080')
    } catch (error) {
        console.log("error")
    }
})