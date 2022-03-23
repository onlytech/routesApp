const express = require('express');
const app = express();
const port = 4000;
app.get('/api/users/:user_name', function(req, res){
    res.end('Hello '+req.params.user_name);
});

app.get('/api/users/', function(req, res){
    const user_name= req.query.name;
   res.end('Hello '+user_name);
});

app.post('/api/users/', function(req, res,next){
    const user_name= JSON.stringify(req.body.name);
   res.end('Hello '+user_name);
});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
