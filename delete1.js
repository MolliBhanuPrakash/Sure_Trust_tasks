const connectdb=require('./connection');
const deletedata=async()=>{
    let data=await connectdb();
    let result=await data.deleteOne({Name:'siva'});
    console.warn('deleted successfully',result);
}
deletedata();