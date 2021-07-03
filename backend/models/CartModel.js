const mongoose = require('mongoose');


const cartItemSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true 
    },
    author:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CartItems', cartItemSchema);