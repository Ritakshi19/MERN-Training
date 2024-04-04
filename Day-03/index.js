// console.log('Hello');
var message = "Hello World";
console.log(message);

let a="gryreftvg"
console.log(a);

const b="jtivr";
console.log(b);

let arr=['a','b','c','d'];
arr[0]='abcd';
console.log(arr);

let str='12';
let age=20;
let ans=age+str;
let ans1=age-str;
console.log(ans);
console.log(ans1);
let ans2=age-(-str);
console.log(ans2);

let q='1';
let w=1;
if(q==w){
    console.log('yes');
}
else{
    console.log('no');
}
let e='1';
let r=1;
if(e===r){
    console.log('yes');
}
else{
    console.log('no');
}

let t=['a','s','d'];
let y=[...t];
console.log(t,y);
if(t==y){
    console.log('yes');
}
else{
    console.log('no');
}

const str1= 'Khan';
const usrname = `My name is : ${str1}`;
console.log(usrname);

function print(){
   console.log(str);
}
print();

function sum(num1,num2){
    if(num1 && num2)
    {
        console.log(num1+num2);  
    }
    else{
        console.log(num1);
    }
    
}
sum(10);

//function declaration
function print1(){
    console.log("--");
}
//function assignment(named)
const v=function print1(){
    console.log("--");
}
//function assignment(anonymous)
const l=function (){
    console.log("--");
}
//arrow function assignment
const k= ()=>{
    console.log("--");
}
print1();
v();
l();
k();

//return a value in arrow function
let h=2;
switch(h){
    case 1:
        {
            console.log("one");
            break;
        }
        case 2:
        {
            console.log("two");
            break;
        }
        case 2:
        {
            console.log("three");
            break;
        }
        defalut:{
            console.log("not a valid number");
        }
} 

const obj=new Object();
obj[12]='twelve';
obj[1]='one';

 console.log(obj);

 const obj1={
    1:'one',
    'name':'Ritakshi',
    12:'twelve'

 }
 console.log(obj1);
 const i = prompt('Please tell the property to know ');
 console.log(i);
 console.log(obj1[i]);