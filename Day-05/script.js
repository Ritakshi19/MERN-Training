// let arr = [2,10,21,32];

// function printPretty(elem){
//     console.log(': ',elem);
// }
// function printArray(arr){
//     // for(let i=0; i<arr.length; i++)
//     // {
//     //     console.log(arr[i]);
//     // }
//     // arr.forEach(printPretty);
//     arr.forEach(function printPretty(elem){
//         console.log(': ',elem);
//     });
//     arr.forEach(function (elem){ //function can be declared with anonymous function
//         console.log(': ',elem);
//     });
//     arr.forEach((a,b,c)=>{
//         console.log(a,b,c);
//     })
//     arr.map((a,b,c)=>{
//         console.log(a,b,c);
//     })

// }
// printArray(arr);
function printPretty(elem){
    console.log('Hello');
}
setTimeout(printPretty,2000);