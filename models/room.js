const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new mongoose.Schema({
room_type: {
    type: String,
    enum: ['Single','Couple','Family','Presidential','Luxury'],
    required: true
},
room_price:{
    type: Number,
    required: true
},
room_size: {
    type: Number,
    required: true
},

room_description: {
    type: String,
    required: true
},
room_status: {
    type: String,
    enum:['available','unavailable','booked'],
    required: true,
    default: 'available'
}
},{timestamps:true}
)

module.exports=mongoose.model('Rooms',roomSchema);