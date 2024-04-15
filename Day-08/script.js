const fs=require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./Data.json','utf-8');
const dataObj = JSON.parse(data).recipes;
const cardTemplate = `
<body style="display: grid;
            grid-template-columns: 1fr 1fr 1fr ;
            column-gap: 15px;
            row-gap: 5px; ">
    <div class='product-card' 
        style="height:300px; 
                width:250px; 
                border : 3px double #B784B7;
                margin: 15px auto;
                padding: 20px;
                background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
                text-align: center;
                border-radius: 10px;">
    <h4>Title</h4>
    <img src="img_src" alt="product_image" 
        style="height: 150px;
                width: 150px;
                margin: 10px;
                cursor: pointer;">
    <a href= read> Read More </a>

    </div>
</body>`;
let result = [];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('Title',dataObj[i].name);
    temp = temp.replace('img_src',dataObj[i].image);
    temp = temp.replace('read', `/product?id=${i}`);
    result.push(temp);
}
// console.log(result);
result= result.join(' ')

const server = http.createServer((req, res)=>{
    const route = req.url;
    const {pathname , query}= url.parse(route, true);  //returns object
    console.log(pathname);
    console.log(query);
    if(pathname=='/home'){
        res.end(result);
    }
    else if(pathname=='/product'){
        const id = query.id;
        const item= dataObj[id];
        // console.log(dataObj[id])
        // res.end('Product Page '+ query.id);
        // res.end(dataObj[id].title)
        res.end(`
        <div> 
        <h1>${item.name}</h1>
        <img src = ${item.image} style="height:250px; width: 300px; ">
        <h3> Ingredients :</h3>
        <p>${item.ingredients}</p>
        <h3> Instructions :</h3>
        <p>${item.instructions}</p>
        <h3>Rating: ${item.rating} </h3>
        <h3>Cuisine: ${item.cuisine} </h3>
        <h3>Meal type: ${item.mealType[0]} </h3>
        <div>`);
    }
    else{
        res.end('Not Found');
    }

    // res.end(result);

});
server.listen(1400);

