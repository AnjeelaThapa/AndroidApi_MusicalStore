const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    Instrumentid: {
        type:String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});
                     // table name, variable name
const stock = mongoose.model('stock', stockSchema);
module.exports = stock;