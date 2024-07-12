const arr=[1,2,3,4,5];
arr.filter((i)=>{
    console.warn(i);

})
let x=arr.filter((i)=>{
    return i>2;
})
console.warn(x);