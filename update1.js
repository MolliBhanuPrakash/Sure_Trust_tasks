// const connectdb=require('./connection');
// const update=async()=>{
//     let d=await connectdb();
//     let data=await d.updateOne({
//         Name:'abhiram'},{$set:{Age:22}}
//     );
//     console.warn("data updated");

// }
// update();
const connectdb=require('./connection');
const update=async()=>{
    let d=await connectdb();
    let data=await d.updateOne({
        Name:'bhanu'},{$set:{Age:20}}
    );
    console.warn("Data Updated");
}
update();