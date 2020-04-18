const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var session = require("express-session");
const cors = require('cors');
const cs = require('cookie-session');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT||5000;
app.set('port', process.env.port || port); 
app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors());
app.use(cookieParser());




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


const poemRoute = require("./routes/api/poems");
app.use("/", poemRoute);




var db=require('./config/conn').url

mongoose
  .connect(db, { useNewUrlParser: true ,useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});