//Model
const poem = require('../models/poem');

const express = require('express');
var session = require("express-session");
const app = express();
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


const newpoem = new poem({
poem: req.body.poem
})
newpoem
.save()
.then(data => res.redirect('https://devwrite.herokuapp.com/#/addpoem'))
.catch(() => res.status(400).json({
msg: 'Something went wrong'
}))
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
    res.redirect('https://devwrite.herokuapp.com/#/addpoem');
    }else{
        res.status(400).json({
            msg: 'Something went wrong'
            });
    }
    
    }

