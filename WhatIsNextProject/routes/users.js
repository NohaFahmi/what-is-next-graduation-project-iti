const dotenv=require('dotenv').config();
process.env.TOKEN_SECRET;
var express = require('express');

var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const app = require('../app');

function generateAccessToken(_id) {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(_id, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
router.post('/api/signup', (req, res, next) => {
  User.find({ mail: req.body.mail }).then(result => {
    if (result.length < 1) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(404).json({
            message: err
          })
        } else {
          const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mail : req.body.mail,
            password: hash,
            age : req.body.age,
            gender : req.body.gender,
            bio : req.body.bio,
            socialLinks:req.body.socialLinks,
            location:req.body.location 
          })
          user.save().then(result => {
            console.log(result);
            console.log(user);
            res.status(200).json({
              message: "user created"
            })
          }).catch(err => {
            res.status(404).json({
              message: err
            })
          })
        }
      })


    } else {
      res.status(404).json({
        message: "This user already exist please sign in"
      })
    }

  }).catch(err => {
    res.status(404).json({
      message: err
    })
  })


})
router.post('/api/signin',(req,res,next)=>{
   User.find({mail :req.body.mail}).then(
     
     user=>{
       if(user.length>=1){
         
            bcrypt.compare(req.body.password,user[0].password).then(result=>{
              if(result){
                const token = generateAccessToken({ _id: user._id });
               
               
                
                res.status(200).json({
                  message : token ,
                
                
                })
               
               
              }else{
                res.status(404).json({
                  message : "wrong password"
                })
              }
            }).catch(err => {
              res.status(404).json({
                message: err
              })
            })
       }
       else{
         res.status(404).json({
           message : "This user is not regestered!"
         })
       }
     }
   ).catch(err => {
    res.status(404).json({
      message: err
    })
})
})
router.get('/api/',(req,res,next)=>{
  User.find().then(doc=>{
      res.status(200).json({
          user:doc
      })
      
  }).catch(err=>{
   res.status(404).json({
       message: err
   })
})
});
router.get('/api/:userID',(req,res,next)=>{
  User.find({_id:req.params.userID}).then(result =>{
      res.status(200).json({
          user : result
      })
  }).catch(err=>{
      res.status(404).json({
          message: err
      })
  })
})
router.get('/userInfo/:mail',(req,res,next)=>{
  User.find({mail:req.params.mail}).then(result =>{
      res.status(200).json({
          user : result
      })
  }).catch(err=>{
      res.status(404).json({
          message: err
      })
  })
})

router.patch('/api/updateuser/:id',(req,res,next)=>{
  bcrypt.hash(req.body.password,10).then(hash=>{
   const newuser={
     firstName :req.body.firstName,
     lastName : req.body.lastName,
     mail :req.body.mail,
     password : hash,
     age : req.body.age,
     gender : req.body.gender,
     bio : req.body.bio,
     socialLinks:req.body.socialLinks,
     location:req.body.location,
     career:req.body.career,
     profilPicture:req.body.profilPicture,
     sample : req.body.sample
   }
    User.findOneAndUpdate({_id:req.params.id},{$set:newuser}).then(result=>{
      if(result==null){
        res.status(404).json({
          message : "user not found"
        })
      }else{
        res.status(202).json({
          message : "user updated"
        })
       
      }
      
    }).catch(err => {
    res.status(404).json({
      message: err
    })
  })
  }).catch(err => {
    res.status(404).json({
      message: err
    })
  })

})
router.delete('/api/deleteuser/:id',(req,res,next)=>{
  User.findOneAndDelete({_id:req.params.id}).then(result=>{
    if(result==null){
      res.status(404).json({
        message : "user not found"
      })
    }
    else {
      res.status(200).json({
        message : "user deleted"
      })
     
    }
    
  }).catch(err => {
    res.status(404).json({
      message: err
    })
  })
})


module.exports = router;
