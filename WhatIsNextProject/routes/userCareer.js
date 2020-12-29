var express = require ('express');

var router = express.Router();
const UserCareer = require('../models/UserCareer');

router.post('/api/',(req,res,next)=>{
    const newuserCareer = new UserCareer({
        user:req.body.user,
        career:req.body.career
    })
    newuserCareer.save().then(doc=>{
        res.status(200).json({
            message:doc
        })
    }).catch(err => {
        res.status(404).json({
          message: err
        })
      })
})
router.get('/api/',(req,res,next)=>{
    UserCareer.find().populate('career').
    then(doc=>{
        res.status(200).json({
            message:doc
        })
    }).catch(err => {
        res.status(404).json({
          message: err
        })
      })
})

router.patch('/api/:usercareerID',(req,res,next)=>{
    const newusercareer={
        user:req.body.user,
        career:req.body.career
    }
    UserCareer.updateMany({
        _id : req.params.usercareerID
    }, {$set:newusercareer}).then(doc=>{
        res.status(200).json({
            message : "step updated successfully"
        })
    }).catch(err=>{
        res.status(404).json({
            message: err
        })
    })
})

router.delete('/api/:usercareerID',(req,res,next)=>{
    UserCareer.findOneAndDelete({_id:req.params.usercareerID}).then(doc=>{
      if(doc==null){
        res.status(404).json({
          message : "career not found"
        })
      }
      else {
        res.status(200).json({
          message : "career deleted"
        })
       
      }
      
    }).catch(err => {
      res.status(404).json({
        message: err
      })
    })
  })
module.exports = router;