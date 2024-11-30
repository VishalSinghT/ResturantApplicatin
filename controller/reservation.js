
import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reeservationSchema.js";


export const sendReservation = async(req,res,next)=>{
 
    
    try{
        console.log(req.body.firstName)
        await Reservation.create({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
           email: req.body.email,
           date: req.body.date,
           time: req.body.time,
 
        });
        res.status(200).json({
            success: true,
            message : " Reservation sent successfully "
        });
    }catch(error){
        if(error){
            console.log(error)
            return next(new ErrorHandler(validationErrors.join(" , "),400));
        }
     return next(error);
    }
};