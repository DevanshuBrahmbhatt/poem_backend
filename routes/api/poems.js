const express = require("express");
const router = express.Router();





const poemsController = require('../../controllers/poems');
router.post('/addlogin', poemsController.verify);
router.post('/addpoem', poemsController.create);
router.get('/', poemsController.get);

module.exports=router;