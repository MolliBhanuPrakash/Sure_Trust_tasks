var express=require('express');
var app=express();
app.get('/iiit', function(req, res){
    res.send('<h1>Good evening all</h1>');
});
app.post('/ongole', function(req, res){
    res.send('<h2>RGUKT->Catering to the Educational Needs of Gifted Rural Youth</h2>');
});
app.post('/rgukt', function(req, res){
    res.send('<h1>this is Landing Page of rgukt website</h>')
})
app.listen(2024);