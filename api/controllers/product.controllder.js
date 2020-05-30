const db = require('../../db');
const Product = require('../../models/product.model');




module.exports.showProduct = async (req,res)=>{
    

    const products = await Product.find();
    res.json(products);

};