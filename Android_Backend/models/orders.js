const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userid: {
        type:String,
        required: true
    },
    Instrumentid: {
        type: String,
        required: true
    },
    qty:{
        type: String,
        required: true
    },
    cart:{
        type: Boolean,
        required: true 
    },
    sold: {
        type: Boolean,
        required: true
    }
});
                     // table name, variable name
const orders = mongoose.model('orders', orderSchema);
module.exports = orders;