import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "food",
    })
    .then(()=>{
        console.log(" connected to database")
    })
    .catch(err=>{
        console.log(`some error occure while connecting the database ?${err}`)
    })
};