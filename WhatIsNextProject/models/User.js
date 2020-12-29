const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
    age : {
        type : Number,
        required:false
    },
    gender : {
        type : String,
        required:false
    },
    bio : {
        type : String,
        required:false
    },
    location : {
        type : Object,
        required:false
    },
    socialLinks : {
        type : Object,
        required:false
    },
    career : {
        type : String,
        required:false
    },
    profilePicture : {
        type : String,
        required:false
    },
    sample :{
        type : Object,
        required : false
    }


})

module.exports = mongoose.model('User',userSchema)