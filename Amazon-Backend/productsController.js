const productModel = require('../models/productsModel.js');

const getAllProducts = async (req,res)=>{
    const {sort='price', page = 1, pageSize =3,fields = '-price', ...q} = req.query;
    let query = productModel.find(q);
    let skip = pageSize*(page -1);
    query= query.sort(sort.split(',').join(' '));
    const fieldstr= fields.split(',').join(' ');
    console.log(q ,sort);
    query=query.skip(skip).limit(pageSize);
    query = query.select(fieldstr); //particularly select the fields which we want to display
    
    const products = await query;
    const totalResults = await productModel.countDocuments();
    // console.log(data);
    console.log(req.url);
    res.json({
        status:"success",
        results: products.length,
        data:{
            products,
        },
        totalResults : totalResults,
        pageSize: pageSize,
        page: page,
  })
}

const addProduct =async (req,res)=>{
    try{
    const {_id, ...reqData} = req.body;
    const data= await productModel.create(reqData);
    console.log(data);
    res.json({
        status: "false",
        results : 1,
        data: {
            products : data,

        }
    })
    }
    catch(err){
        console.log(err);
        res.json({
            status: "false",
            message: JSON.stringify(err)
    });
    }
}

const replaceProduct = async (req,res)=>{
    try{
    const reqId= req.params.id;
    const data = {...req.body, _id: reqId};
    const result= await productModel.findOneAndReplace({_id: reqId}, data);
    res.json({
        status: "success",
        results : 1,
        data: {
            products : result,

        }
    })
    }
    catch(err){
        res.json({
            status: "false",
            message: JSON.stringify(err)
    });
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const reqId= req.params.id;
        // const data = {...req.body, _id:reqId};
        const result= await productModel.findOneAndDelete({_id: reqId});
        res.json({
            status: "success",
            results : 1,
            data: {
                products : result,
    
            }
        })
        }
        catch(err){
            res.json({
                status: "false",
                message: JSON.stringify(err)
        });
        }
}
module.exports = { 
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,
}