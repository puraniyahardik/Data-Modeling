import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import 'dotenv/config'

const connectDB = async () =>{
    try {

        const mongoInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n mongoDb connected !! DB HOST:${mongoInstance.connection.host}`);

    } catch (error) {
        console.log("Mongodb Connection error:-", error);
        process.exit(1); 
        
    }
}

export default connectDB;