const fsPromises = require("fs/promises");

const getAllProducts = async(req,res)=>{
    // const data = fs.readFileSync('./data.json',"utf-8");
    const data = await fsPromises.readFile('./data.json',"utf-8");

    const arr = JSON.parse(data);
    // res.json(obj);
    res.json({
        status: 'success',
        results: arr.length,
        data:{
            products: arr,
        }
    })
}

const addProduct = async (req,res)=>{
    // console.log(Object.keys(req));
    // console.log(req.body);
    const data=req.body;
    // data.id = 121;
    // console.log(data);
    if(!data.price || !data.title){
        res.json({
            status: 'fail',
            message: 'Title and price must be provided'
        })
    }
    else{
    const db= await fsPromises.readFile("./data.json","utf-8");
    const arr= JSON.parse(db);
    const len=arr.length;
    const newId=data;
    if(len==0){
        newId.id=1;
    }
    else{
        
        newId.id = (arr[len-1].id)+1;  
        
    }
    arr.push(newId);
    fsPromises.writeFile("./data.json",JSON.stringify(arr));
    res.json({
        status: 'success',
        results: 1,
        data:{
            newId: newId,
        }
    })
    }
}

const deleteProduct=  async(req,res)=>{
        const reqid=parseInt(req.params.id);
        const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"));
        const newArr=arr.filter((elem)=>{
            if(elem.id === reqid)return false;
            else return true;
        });
        fsPromises.writeFile("./data.json", JSON.stringify(newArr));
        res.status(204);
        res.json({
            status: 'success',
            data:{
                newId: null,
            }
        })
    }

const updateProduct= async (req,res)=>{
        const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"));
        // res.send("Work in progress")
       
        // console.log(req.params);
        const reqid= parseInt(req.params.id);
         const data =req.body;
         data.id=reqid;
         const newArr= arr.map((elem)=>{
            if(elem.id==reqid) return data;
            else return elem;
         })
         fsPromises.writeFile("./data.json", JSON.stringify(newArr));
         res.json({
            status: 'success',
            results: 1,
            data:{
                newId: data,
            }
        })
    
    }

module.exports={
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct,
}