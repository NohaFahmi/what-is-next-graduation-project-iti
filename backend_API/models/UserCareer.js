const mongoose = require('mongoose');
const userCareerSchema = mongoose.Schema({
   career:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Career",
        required:true,
    },
    user:{
        type : Array
    }
})

module.exports=mongoose.model("UserCareer",userCareerSchema)