console.log('start')
setTimeout(()=>{console.log('Timeout..')},0)
console.log('end')     
setTimeout(()=>{console.log('Timeout..1')},20000)
console.log('start')
setTimeout(()=>{console.log('Timeout..2')},5000)
console.log('intermediate')
console.log('end') 

function createorder(x,fn){
    console.log(x);
    setTimeout(() => {fn('lik123'),10000});
}
function makepayment(orderId){
    console.log(orderId)
}
createorder('soap',makepayment);

//promises
const pr= new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{resolve();},1000);
    }
    else{
        reject();
    }

});
console.log(pr)


const pr1= new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve("done-123");},1000);
    setTimeout(()=>{reject("done-123");},0);

});
setTimeout(()=>{
    console.log('First timeout')},0);
console.log(pr1)
pr1.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

setTimeout(function abc(){
    console.log('I am one');
},0);
const pr2= new Promise((res,rej)=>{
    setTimeout(()=>{res("done");},0);
})
pr2.then(function b(res){
    console.log("promise completed:",res);
})
setTimeout(function xyz(){
    console.log('I am two');
},0);

