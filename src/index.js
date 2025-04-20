import dotenv  from 'dotenv';
import express from 'express';
import connectDB from '../db/db.js';
dotenv.config({
    path:'./env'
})

connectDB();



//first approach
/* import express from 'express';
const app = express();

(async () => {
    try {

       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

       //in any reason express not connect with mongodb then handle Err.To add listers

       app.on("error", (err) => {
        console.log("Err:- ", err);
        throw err;
       });


       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })
    
    } catch (error) {
        console.log("ERROR:-", error);
    }
})() */


