import mongoose from "mongoose";


const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagnoseWith:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    address:{
        type: Number,
    },
    bloodGroup:{
        type: Number,
    },
    gender:{
        type: Number,
        enum: ["F", "M", "O"],
        required: true
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        red:'Hospital'
    }
}, {timestamps: true});

export const Patient = mongoose.model('Patient', patientSchema);
