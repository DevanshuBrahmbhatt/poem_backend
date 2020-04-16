const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const poem = require("../../models/poem");
// var db=require('../../config/conn').url;







const poemsController = require('../../controllers/poems');
router.post('/addlogin', poemsController.verify);
router.post('/addpoem', poemsController.create);
router.get('/', poemsController.get);







// router.get('/',(req,res)=>{


// poem.find({})
// .then(res.json(poem))
// .catch(err => console.log("got some error in profile " + err));

// });








// router.post('/addlogin', (req,res)=>{

//     const username=req.body.username;
//     const password=req.body.password;

//     if(username==dev123 && password==123456 ){

//         req.session.username=username;

//         res.redirect('/addpoem');

//     }
//     else{
//         return res
//         .status(400)
//         .json({ error: "You are not allowed to enter" });
//     }



// });


// router.post('/addpoem',(req,res)=>{

//     if(req.session.username!==undefined){

//     var poem=req.body.poem;

//     const newpoem = new poem({
//         poem: poem,
//     });
//     newpoem
//     .save()
//     .then(poem => res.json(poem))
//     .catch(err => console.log(err));}
//     else{

//         return res
//         .status(400)
//         .json({ error: "You are not allowed to enter" });
//     }
// })







module.exports=router;