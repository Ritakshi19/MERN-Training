let figlet = require("figlet");
figlet('Hello !',(err, data)=>{
    console.log(data);
});
fetch('https://apii.github.com/users/deepak3440').then((res)=>
{
    return res.json();
})
.then((data)=>{
    console.log(data);

}).catch((err)=>{
    console.log("Error occurred");
})
console.log("end")

//Async Await
console.log("start");
async function getApi(){
    console.log('api calling..')
    const pr = await fetch('https://api.github.com/users/deepak3440');
    console.log('making json..')
    const data = await pr.json();
    console.log('fetched data..')
    console.log(data);
}
getApi();
console.log("end");
console.log("start");
async function callApi(){
    const pr1 = new Promise((res,rej)=>{
    console.log('promise 1..');
    setTimeout(()=>{
    console.log('timeout..');
    },10000)

    })
    

console.log('promise 1 completed..');
const pr2 = new Promise((res,rej)=>{
    console.log('promise 2 started..');
    setTimeout(()=>{
    console.log('timeout..');

    },10000)

    })
    
console.log('promise 2 completed..');   
}
callApi();