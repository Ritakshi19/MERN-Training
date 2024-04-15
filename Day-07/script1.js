// Reading and Wriring file using Sync
const fs = require ('fs');

// const data = fs.readFileSync('./myReadMe.txt');
const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf-8'});
console.log(data);
console.log(data.toString());

const data1= fs.writeFileSync('./logs.txt',"10th April 2024 : Day 7")
const data2 = fs.readFileSync('./logs.txt');
console.log(data2.toString());

console.log('Start')
const data3 = fs.readFileSync('./logs.txt',{encoding:'utf-8'})
console.log(data3);
console.log('End')

// Promises in File System
console.log('Start')
const fsPromises = require('fs/promises');
const pr = fsPromises.readFile('./myReadMe.txt',{encoding :'utf8'});
pr.then((res)=>{
    console.log(res);
})
console.log('End')

// Callback in File System
const fs = require('fs')
const data4 = fs.readFile('./myReadMe.txt',{encoding: "utf8"}, (err,data4)=>
{
    console.log(data4);
});

const http = require('http');
const app = http.createServer((req, res)=>{
    console.log('Request Recieved');
    console.log(req.url);
    // console.log(Object.keys(req));
    res.writeHead(200,{
        'content-type' : 'text/html',
    }) //Response is of what type
    res.end("<h1>hello</h1> <h2>hi..</h2>");
});
app.listen(1400,()=>{
    console.log("Server Started");
});
//http://localhost:1400/
