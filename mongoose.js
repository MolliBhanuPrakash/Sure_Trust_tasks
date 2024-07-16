const mongoose=require('mongoose');
const insert=async()=>{
    await mongoose.connect("mongodb://localhost:27017/suretrust2");
    const userSchema=new mongoose.Schema({
        Name:String,
        Age:Number
        });
        const User=mongoose.model('User',userSchema);
        const user=new User({Name:'sarath',Age:23,Hobbies:'watching movies'});
        var a=await user.save();
        console.log(a);
}
insert();