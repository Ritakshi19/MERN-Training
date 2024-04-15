
//Mini project
const fs=require('fs');
const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data);
const products = dataObj.products;
// console.log(data);
// console.log(products);
const http = require('http');
const htmlTemplate =`<!DOCTYPE HTML>
<html  lang='en-US'>
    <head>
    <style>
    body{
        background-color: beige;
    }
    main{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 5px;  
    }
    .product-card{
        height : 300px;
        width : 250px;
        border : 3px double #B784B7;
        margin: 15px auto;
        padding: 20px;
        background-color: #E493B3;
        text-align: center;
        border-radius: 10px;
    }
    h1{
        text-align: center;
        color: #DC6B19;
        font-family: "Brush Script MT", cursive;
    }
    img{
        height: 80px;
        width: 80px;
        margin: 10px;
        cursor: pointer;
        }
    </style>
    </head>
    <body>
    <header>
    <h1> Detail of the Products
    </h1>
    </header>
    <main>
        Products Cards
        </main>
    </body>
</html>
`
const cardTemplate = `
<div class='product-card'>
<h4>Title</h4>
<img src= image>
<p>Info</p>

</div>
`;
// const card_1 = cardTemplate.replace('Title',products[0].title)
//                             .replace('Info',products[0].description)
// const card_2 = cardTemplate.replace('Title',products[1].title)
//                             .replace('Info',products[1].description)
const allcards = products.map((elem)=>{
    let newcard= cardTemplate;
    newcard = newcard.replace('Title',elem.title);
    newcard = newcard.replace('image',elem.images[0]);
    newcard = newcard.replace('Info',elem.description);

    return newcard;
});
const allcardsString = allcards.join(' ');
const page = htmlTemplate.replace('Products Cards', allcardsString);
const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200,{
        'content-type' : 'text/html',
    }) //Response is of what type
    res.end(page);
});
server.listen(1400,()=>{
    console.log("Server Started");
});

