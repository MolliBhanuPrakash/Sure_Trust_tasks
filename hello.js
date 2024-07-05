var express=require('express');
var app=express();
app.get('/mbp',function(req,res){
    res.send("Hello all,I am Bhanu Prakash");

});
app.listen(2024);
