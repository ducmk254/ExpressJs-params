const db = require('../db');
const Product = require('../models/product.model');




module.exports.showProduct = async (req,res)=>{
    
    // let page = parseInt(req.query.page) || 1;
    // let perPage = 8;
    // let maxPage = Math.ceil(db.get('products').value().length / perPage);
    // let start = (page -1) * perPage;
    // let end = page * perPage;
    // let products = db.get('products').value().slice(start,end);
    // let pagemimi = page -2;
    // let pagemi = page -1;
    // let pageplus = page + 1;
    // let pageplusplus = page+2;
    // res.render('products',{products: products,maxPage:maxPage,page:page,pagemimi:pagemimi,pagemi:pagemi,pageplus:pageplus,pageplusplus:pageplusplus});


    /* Khong su dung async await */
    // Product.find().then((products)=>{
    //     res.render('products',{
    //         products:products
    //     });
    // });

    /* Su dung async await */
    const products = await Product.find();
    res.render('products',{
        products:products
    });

};