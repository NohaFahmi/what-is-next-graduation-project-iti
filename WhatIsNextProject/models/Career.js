const mongoose = require('mongoose');
const careerSchema = mongoose.Schema({
   careerName :{
       type : String,
       required :true
       
   },
   careerImage:{
      type: String,
      required:false
    }
       ,
   track:[{
       trackName:String,
       trackImage:String,
       course:[{
           courseName:String,
           courseImage:String,
           estimatedTime:String,
           task :[{
               taskName:String,
               taskImage:String,
               description:String,

           }],
           resource :[{
               resourceName:String,
               link:String,
               price:String,
               estimatedTime:String,
               resourceImage:String
           }]
       }]
   }]
})
module.exports = mongoose.model('Career',careerSchema);