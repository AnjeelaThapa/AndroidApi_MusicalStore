const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    categoryid: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});
                     // table name, variable name
const instruments = mongoose.model('instruments', instrumentSchema);
module.exports = instruments;