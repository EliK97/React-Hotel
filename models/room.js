const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomsSchema = new mongoose.Schema({
room_name: {
    type: String,
    unique:true,
    required:[true, '']
},
room_type: {
    type: String,
    enum: ['single','couple','family','presidential'],
    required:[true,'']
},
room_price:{
    type: Number,
    required:[true,'']
},
room_size: {
    type: Number,
    required: [true,'']
},
room_capacity: {
    type: Number,
    required: [true,'']
},
room_description: {
    type: String,
    required: [true,'']
},
room_status: {
    type: String,
    enum:['available','unavailable','booked'],
    required: [true,''],
    default: 'available'
},
createdAt:{
    type: Date,
    default: function() {
        return new Date(+ Date());
    },
},
updatedAt:{
    type: Date,
    default: function() {
        return new Date(+ Date());
    },
}
})

module.exports=mongoose.model('Rooms',roomsSchema);