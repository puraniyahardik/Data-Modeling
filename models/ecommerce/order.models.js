import mongoose from "mongoose";

//mini model
const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        required: true,
        type: Number
    }
})

const orderSchema  = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItem:{
        type: [orderItemSchema]//pass array and schema
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["PENDING", 'CANCELLED', 'DELIVERED'],
        default: 'PENDING'
    }

}, {timestamps: true});

export const Order = mongoose.model('Order', orderSchema);