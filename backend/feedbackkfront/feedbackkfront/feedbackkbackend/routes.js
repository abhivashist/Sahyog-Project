const express = require('express');
const jwt = require("jsonwebtoken");
// const jwt = require('express-jwt');
const router = express()
const feedBackTemplateCopy = require('../feedbackkbackend/models/FeedbackModels')
// import { getToken } from "./util.mjs";
const getToken = (user) => {
    return jwt.sign({
      _id: user._id,
      firstname: user.firstname,
      email: user.email,
    }, process.env.JWT_SIGNIN_KEY,{
        expiresIn: '48h'
    });
  };

router.post('/signup',(request,response)=>{
    console.log(request.body);
    const {firstname, lastname, dob, email, number, objective, service, specification, experience, location, pswrd, cpswrd}=request.body;
    feedBackTemplateCopy.findOne({email}).exec((err,user)=>{
       if(user){
           console.log("User with this email exists");
           return response.json({err: "User with this email exists"});
       }
       let newUser = new feedBackTemplateCopy({firstname, lastname, dob, email, number, objective, service, specification, experience, location, pswrd, cpswrd});
       newUser.save((err,success)=>{
           if(err){
               console.log("Error in SIgnup : ",err);
               return response.status(400), json({error : err})
           }
           response.json({
               message: "Signup SUccess!"
           })
       });
    })
})
//   const signedUpUser = new feedBackTemplateCopy({
//       firstname:request.body.firstname,
//       middlename:request.body.middlename,
//       lastname:request.body.lastname,
//       suggestions:request.body.suggestions
//   })
//   signedUpUser.save()
//   .then(data=>{
//       response.json(data)
//   })
//   .catch(error =>{
//       response.json(error)
//   })


// router.get('/signin',async(request,response)=>{
//     let allfeed = await mytable.find();
//     if(allfeed!==[]){
//         console.log("yes onnnn")
//         response.status(200).send(allfeed)
//     } else{
//         response.status(400).send({error:"don't know "})
//     }
// });

// router.post('/signin',async(request,response)=>{
//     const {email, pswrd, location , acceptedterms} =request.body;
//     feedBackTemplateCopy.findOne({email}).exec((err,user)=>{
//         if(err) {
//             console.log("eroorrrr");
//             return response.status(400).json({
                
//                 error: "This user doesn't exist, signup first"
//             })
//         }
//         if(feedBackTemplateCopy.pswrd!==pswrd) {
//             console.log("error");
//             return response.status(400).json({
             
//                 error: "Invalid Credentials"
//             })
//         }
//         const token = jwt.sign({_id:feedBackTemplateCopy._id}, process.env.JWT_SIGNIN_KEY, {expiresIn:'1d'});
//        const {_id, firstname, email}= user;
//        console.log("user logged in");
//        response.json({
//            token,
//            user : {_id, firstname, email}

           
//        })
    
//      })
    
     
// });
router.get('/getdata',async(req,res,next)=>{
  let newfeed=await feedBackTemplateCopy.find();
  if(newfeed!==""){
    res.send(newfeed)
  }else{
    res.send("error");
  }
  // .then(result=>{
  //   res.status(200).json({
  //     UserData:result
  //   });
  // })
  // .catch(err=>{
  //   console.log(err);
  //   res.status(500).json({
  //     error:err
  //   })
  // });
})
router.post('/signin', async (req,res) =>{
    const signinUser = await feedBackTemplateCopy.findOne({
      email: req.body.email,
      pswrd: req.body.pswrd
    });
    if(signinUser){
       
      res.send({
        _id: signinUser.id,
        firstname: signinUser.firstname,
        email: signinUser.email,
        token: getToken(signinUser)
      ,msg:'welcome',responsecode:"200"});
    }
    else{

      res.send({msg:'Invalid Email or Password.',responsecode:"401"});
    }
  })
  

   module.exports=router;