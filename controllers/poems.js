//Model
const poem = require('../models/poem');



exports.create =  (req, res) => {
const newpoem = new poem({
poem: req.body.poem
})
newpoem
.save()
.then(data => res.json(data))
.catch(() => res.status(400).json({
msg: 'Something went wrong'
}))
}


exports.get = (req, res) => {
poem
.find()
.then(poem => res.json(poem))
.catch(() => res.status(400).json({ msg : 'Something went wrong'}))
}


exports.verify = (req, res) => {

const username = req.body.username;
const password = req.body.password;

const u=require('../config/conn').username;
const p=require('../config/conn').password;

if(username ===u && password ===p){
    res.status(200).json({
        msg: 'verified'
        });
}
else{
    res.status(400).json({
        msg: 'Something went wrong'
        });
}




}