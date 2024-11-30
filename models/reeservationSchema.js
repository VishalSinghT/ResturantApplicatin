import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  
  },
  lastName: {
    type: String,
    required: false,
    
  },
  phone: {
    type: String,
    required: false,
    
  },
  date: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    
  },
 
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

const tutschema = new mongoose.Schema({
  name:{
    type : String,
    required:true
  }
})

const collection = new mongoose.model('tut',tutschema)

