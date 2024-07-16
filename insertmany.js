const connectdb1=require('./connection');
const insert=async()=>{
    const db=await connectdb1();
    // const result=await db.insertOne({Name:'Nitish',Age:21,Hobbies:'Boxing'});
    const result=await db.insertMany([{Name:'siva',Age:20,Hobbies:'chatting'},{Name:'srihari',Age:22,Hobbies:'running'},{Name:'rukesh',Age:22,Hobbies:'coding'},{Name:'janakiram',Age:22,Hobbies:'cricket'}]);
    if(result.acknowledged)
        console.log('Data inserted successfully');
}

insert();