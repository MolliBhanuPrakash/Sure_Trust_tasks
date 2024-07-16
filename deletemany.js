const connectdb=require('./connection');
const deletedata=async()=>{
    let data=await connectdb();
    let result=await data.deleteMany({Age:20});
    console.warn('deleted successfully',result);
}
deletedata();