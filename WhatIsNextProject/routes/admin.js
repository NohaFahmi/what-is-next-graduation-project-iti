var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin')
router.post('/signup', (req, res, next) => {
  Admin.find({ mail: req.body.mail }).then(result => {
    if (result.length < 1) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(404).json({
            message: err
          })
        } else {
          const admin = new Admin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mail : req.body.mail,
            password: hash,
           mobile : req.body.mobile
           
          })
          admin.save().then(result => {
            console.log(result);
            console.log(admin);
            res.status(200).json({
              message: "admin created"
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
        message: "This admin already exist please sign in"
      })
    }

  }).catch(err => {
    res.status(404).json({
      message: err
    })
  })


})
router.get('/signin',(req,res,next)=>{
   Admin.find({mail :req.body.mail}).then(
     admin=>{
       if(admin.length>=1){
            bcrypt.compare(req.body.password,admin[0].password).then(result=>{
              if(result){
                res.status(200).json({
                  message : "signed in successfully"
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
           message : "This admin is not regestered!"
         })
       }
     }
   ).catch(err => {
    res.status(404).json({
      message: err
    })
})
})

router.patch('/updateadmin/:id',(req,res,next)=>{
  bcrypt.hash(req.body.password,10).then(hash=>{
   const newadmin={
     firstName :req.body.firstName,
     lastName : req.body.lastName,
     mail :req.body.mail,
     password : hash,
     mobile : req.body.mobile
     
     

   }
    Admin.findOneAndUpdate({_id:req.params.id},{$set:newadmin}).then(result=>{
      if(result==null){
        res.status(404).json({
          message : "admin not found"
        })
      }else{
        res.status(202).json({
          message : "admin updated"
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
router.delete('/deleteadmin/:id',(req,res,next)=>{
  Admin.findOneAndDelete({_id:req.params.id}).then(result=>{
    if(result==null){
      res.status(404).json({
        message : "admin not found"
      })
    }
    else {
      res.status(200).json({
        message : "admin deleted"
      })
     
    }
    
  }).catch(err => {
    res.status(404).json({
      message: err
    })
  })
})

module.exports = router;
