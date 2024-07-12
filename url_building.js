var express=require('express');
var app=express();
app.get('/mypage/:id',function(req,res){
    res.send('id='+req.params.id);
});
app.listen(2023);
