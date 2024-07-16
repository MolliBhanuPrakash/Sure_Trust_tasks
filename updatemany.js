const connectdb1=require('./connection');
const updatemany=async()=>{
    const db=await connectdb1();
    const result=await db.updateMany({Age:22},{$set:{Hobbies:'running'}});
    if(result.acknowledged)
        console.log('Data updated successfully');
}
// db.posts.updateMany({}, { $inc: { likes: 1 } })  
updatemany();