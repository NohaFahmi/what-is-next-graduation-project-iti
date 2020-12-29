const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    firstName : {
        type : String,
        required:true
    },
    lastName :{
        type: String,
        required:true
    },
    mail : {
        type : String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    mobile : {
        type : String,
        required:true
    }
})

module.exports = mongoose.model('Admin',adminSchema)