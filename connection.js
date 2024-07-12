const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017/';
const database="suretrust";
const client= new MongoClient(url);
const connectdb=async()=>{
    var a=await client.connect();
    db=a.db(database);
    console.log("connected to database");
    return db.collection("student");
    }
    module.exports=connectdb;