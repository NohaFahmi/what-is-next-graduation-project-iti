var express = require ('express');

var router = express.Router();
const Career = require('../models/Career');



router.get('/',(req,res,next)=>{
   Career.find().then(doc=>{
       res.status(200).json({
           career:doc
       })
       
   }).catch(err=>{
    res.status(404).json({
        message: err
    })
})
});
router.get('/tracks/:careerName',(req,res,next)=>{
    Career.find({careerName:req.params.careerName}).
    select('track')
    .then(doc=>{
        res.status(200).json({
            career:doc
        })
        
    }).catch(err=>{
     res.status(404).json({
         message: err
     })
 })
 });
 

 router.get('/courses',(req,res,next)=>{
    Career.find().
    select('track.course')
    .then(doc=>{
        res.status(200).json({
            career:doc
        })
        
    }).catch(err=>{
     res.status(404).json({
         message: err
     })
 })
 });

router.post('/addcareer',(req,res,next)=>{
const career = new Career({
    careerName : req.body.careerName,
    careerImage:req.body.careerImage,
    track:req.body.track

});
career.save().then(doc=>{
    res.status(200).json({
        message :"career added successfully"
    })
}).catch(err=>{
    res.status(404).json({
        message: err
    })
})
})
router.get('/:careerID',(req,res,next)=>{
    Career.find({_id:req.params.careerID}).then(result =>{
        res.status(200).json({
            career : result
        })
    }).catch(err=>{
        res.status(404).json({
            message: err
        })
    })
})

router.patch('/:careerID',(req,res,next)=>{
    const newcareer={
        careerName : req.body.careerName,
        careerImage:req.body.careerImage,
        track:req.body.track
    }
    Career.updateMany({
        _id : req.params.careerID
    }, {$set:newcareer}).then(doc=>{
        res.status(200).json({
            message : "career updated successfully"
        })
    }).catch(err=>{
        res.status(404).json({
            message: err
        })
    })
})

router.delete('/:careerID',(req,res,next)=>{
    Career.findOneAndDelete({_id:req.params.careerID}).then(doc=>{
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
