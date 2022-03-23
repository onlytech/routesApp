var express = require('express');
var router = express.Router();

router.post('/', function(req, res,next){
    var user_name= JSON.stringify(req.body.name);
   res.end('Hello '+user_name);
});

module.exports = router;