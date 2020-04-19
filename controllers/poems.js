//Model
const poem = require('../models/poem');

const express = require('express');
var session = require("express-session");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'W$q4=25*8%v-}UV',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 300000,
        httpOnly: false,
        secure: false
  }
  }));


exports.isAuth = function isAuth(req,res,next){

    const userId=req.session.username;
    console.log(userId);

    if(userId){

         return next();
    }
    else{

        res.redirect('/');
       
    }

}





exports.create =   (req, res) => {


    const username = req.body.username;
    const u=require('../config/conn').username;


    if(username===u){
const newpoem = new poem({
poem: req.body.poem
})
newpoem
.save()
.then(
    res.status(200).json({
        msg: "upload"
     }))
.catch(() => res.status(400).json({
msg: 'Something went wrong'
}))
}

else{
    res.status(400).json({
        msg: 'You are not Admin'
        });

}
}




exports.get = (req, res) => {
 poem
.find().sort({"date": -1})
.then(poem => res.json(poem))
.catch(() => res.status(400).json({ msg : 'Something went wrong'}))
}   






exports.verify = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const u=require('../config/conn').username;
    const p=require('../config/conn').password;
    
     req.session.username=req.body.username;
     console.log(req.session.username);


    if(username ===u && password ===p){
    // res.redirect('https://devwrite.herokuapp.com/#/addpoem');
    
        res.status(200).json({
            msg: 'verified'
         });
    }else{
        res.status(400).json({
            msg: 'Something went wrong'
            });
    }
    
    }

