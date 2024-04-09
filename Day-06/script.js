// map

console.log("hello");
const arr= [ 10, 20, 30];
// const ans=arr.forEach((a)=>{
const ans=arr.map((a)=>{
    console.log(a);
    return a*2;
});
const ans1 = arr.map(a=>a**2);
console.log(ans);
console.log(ans1);
const arr1 = [10.11,22.33,34.76];
const ans2=arr1.map(a=>parseInt(a))
console.log(ans2)

// filter
const arr2 = [10,22,34];
const ans3 = arr2.push(99);
console.log(arr2);
console.log(ans3);

const ans4 = arr1.filter((a)=>{
    if(a>20)return true;
    else return false;
})
console.log(arr2);
console.log(ans4);

const arr3 = [
    'Delhi',
    'India',
    'Mumbai',
    'Chennai',
    'Russia',
    'Kolkata',
    'USA',
    'Iraq'
]
const ans5 = arr3.filter((s)=>{
    if(s.includes('i') || s.includes('I')){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans5);

const arr4 = [
    'Delhi,India',
    'Mumbai,India',
    'Chennai,India',
    'Kolkata,India',
    'Texas,USA',
    'Washington,USA',
    'Beijing, China',  
]
const ans6 = arr4.filter((a)=>{
    const ns = a.toLowerCase();
    if(ns.includes('india')){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans6);

const arr5 =[10,22,34,50];
const ans7=arr5.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
    
});
console.log(ans7);
const arr6 =['ab','cd','xy','z'];
const ans8=arr6.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
    
});
console.log(ans8);


