// var fs = require('fs');

// fs.writeFile('mbp.txt', 'rgukt iiit ongole', function(err) {
//     if (err) throw err;
//     console.log('File created');
// });


var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('mbp.txt',function(e,data){
        res.writeHead(200,{'Content-Type':'text'});
        res.write(data);
        return res.end();
    });
}).listen(8080);