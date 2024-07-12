const express=require('express');
const app=express();
const port=2024;
app.set('view engine','ejs');
app.get('/',(req,res) =>{
    res.render('index',{title:'bhanupage',message:'Hello all,I am Bhanu Prakash.I am from Andhra Pradesh'});
});
app.listen(port);