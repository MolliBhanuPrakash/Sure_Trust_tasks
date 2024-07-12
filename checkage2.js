const express=require('express');
const app=express();
const Checkage=require('./checkage');
app.use(express.json());
app.post('/ra',Checkage,(req,res)=>{
    res.send('ra ${req.userType}');

});
app.listen(3030);