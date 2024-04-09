console.log('GEC Start');

function Printpretty(){
    console.log(' Pretty Start');
    let ans=2+3;
    console.log(ans);
    console.log(' Pretty End');
}
setTimeout(Printpretty,10000);
console.log('GEC End');

const btn= document.getElementById("btn");
btn.addEventListener("click",Printpretty);

console.log("Start");
const req=fetch("https://api.github.com/users/deepak3440");
console.log(req);
req.then(()=>console.log("Fetched"));

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
            

.then((data)=>console.log(data))
.catch((err)=>{
    console.log("Error occurred in fetch api");
})
console.log("End");


