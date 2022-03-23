var express = require('express');
var router = express.Router();
const port = 4000;

router.get('/:user_name', function(req, res){
    res.end('Hello '+req.params.user_name);
});


module.exports = router;