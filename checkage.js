module.exports=(req,res,next)=>{
    const{age}=req.body;
    if(age===undefined){
        return res.status(400).send("age is required");
    }
    if(typeof age!=='number'){
        
    }
}