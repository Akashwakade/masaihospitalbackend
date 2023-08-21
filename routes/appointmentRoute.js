
const express=require("express")

const { AppointmentModel } = require("../models/appointmentModel");
const appointmentRouter=express.Router()

  
 
  appointmentRouter.post('/appointments', async (req, res) => {
   
  
    try {
        const note=new AppointmentModel(req.body)
        await note.save()
        res.json({msg:"apppointment has been added",note:req.body})
      } catch (err) {
        res.json({error:"not a user"}) 
      }
  });

  appointmentRouter.get('/appointments', async (req, res) => {
   
  
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
  
      
  
      res.status(201).json({ message: 'Appointment get successfully', appointments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  module.exports={appointmentRouter}