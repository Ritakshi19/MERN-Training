const obj = {
    name:'Ajay',
    lastname:'Singh'
}
console.log(obj);
document.write(obj);
// console.log(typeof(obj));

let arr = [1,2,3];
arr[10]=20;  
console.log(arr);
// console.log(typeof(arr));
console.log(Array.isArray(obj));
console.log(Array.isArray(arr));


function checkifobject(obj1){
    const x = Array.isArray(obj1);
    if (x==true){
        console.log("not an object");
    }
    else if(typeof(obj1)=="object")
    {
        console.log(" an object");

    }
    else{
        console.log("Not object");
    }
    
}
checkifobject([1,2,3]);
checkifobject({"name":"Ritakshi"});
checkifobject(1);
checkifobject(Date());

console.log(typeof(null));
console.log(typeof(undefined));

const abc = ['name',2];
const obj2 = {
    'name': "ajay", age:20,
}
for(let i= 0; i<2 ; i++){
    console.log(abc[i]);
}
for(i=0;i<2;i++){
    console.log(obj2[i]);
}

for( i of abc){
    console.log(i);
}
// for( i of obj2){
//     console.log(i);
// }
for( i in abc){
    console.log(i); //for printing values with indexing
}
for( i in obj2){
    console.log(i);                      
}

console.log(window);
console.log(innerHeight); //console.log(window.innerHeight)
console.log(innerWidth);
console.log(window.document);
console.log(console);
console.dir(console);
console.dir(window);

const res = document.getElementsByTagName('h3');
console.log(res);

let res1 = document.getElementById('ht1');
// res1.innerText = "Hello World";
res1['innerText']= "Hello World";
console.dir(res1);

const res2 =  document.querySelectorAll('h3');
console.log(res2);
const res3 =  document.querySelectorAll('h3.head');
console.log(res3);
const res4 =  document.querySelectorAll('div>h3');
console.log(res4);

const res5=document.getElementsByTagName("p");
// res5[0].innerHTML = "<h4> Hello</h4>";
// res5[0].innerText = "<h4> Hello</h4>";
// res5[0].tagname = "h1"; // cannot change the tagname of the existing tagname
res5[0].setAttribute('class','head');

console.log(res5)

const ne=document.createElement("h3");
ne.innerText="dynamic Text";
// console.log(ne);
// document.body.appendChild(ne);
const firstdiv = document.getElementsByTagName("div")
firstdiv[0].appendChild(ne);
// firstdiv[1].appendChild(ne);

const parent = document.getElementById("div1"); 
const child = document.getElementById("p1");
const throwawayNode = parent.removeChild(child);





