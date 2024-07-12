// let a=10;
// console.log("number",a);
// console.warn("jvhbsdyfbasjihcbyds");
// var b=10;
// if(a>0)
//     console.log("positive");
// else
// console.log("negative");
// for (var i = 1; i <=100; i++) {
//     if (i % 2 == 0 && i % 5 == 0 && i % 7 == 0) {
//         console.warn(i);
//     }
// }
// var d=7;
// if(d%5==0)
//     {
//         console.warn(d,"divisible by 5");
//     }
// else
// {
//     while (d%5!==0) 
//     {
//         reminder=d%5;
//         d=d+5-reminder;
//         console.warn(d,"is now divisible by 5");
//     }
// }

var i = 1;
while (true) {
    if (i % 5 == 0) {
        console.log(i);
        break;
    } else {
        i++; 
    }
}