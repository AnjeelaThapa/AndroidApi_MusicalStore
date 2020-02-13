const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    Message:{
        type: String,
        required: true
    }
    
});
                     // table name, variable name
const contactUs = mongoose.model('contactUs', contactUsSchema);
module.exports = contactUs;