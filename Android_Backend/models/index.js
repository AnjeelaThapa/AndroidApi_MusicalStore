const mongoose = require('mongoose')
const schema = mongoose.Schema;

const testSchema = new schema({
    fullname:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },
})

const test = mongoose.model('user', testSchema)
module.exports = test