var url=require('url');
var ad=
var q=url.parse(ad,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qc=q.query;
console.log(qc.year);