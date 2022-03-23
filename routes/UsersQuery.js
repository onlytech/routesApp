var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    const user_name= req.query.name;
   res.end('Hello '+user_name);
});

module.exports = router;
