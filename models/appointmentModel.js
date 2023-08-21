
const mongoose=require("mongoose")




const AppointmentSchema=mongoose.Schema({
  name: String,
  imageUrl: String,
  specialization: String,
  experience: String,
  location: String,
  date: Date,
  slots: Number,
  fee: Number,
})

const AppointmentModel=mongoose.model("Appointments",AppointmentSchema)
module.exports={AppointmentModel}
