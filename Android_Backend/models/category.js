const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageName:{
        type: String,
        required: true
    }
    
});
                     // table name, variable name
const category = mongoose.model('category', categorySchema);
module.exports = category;