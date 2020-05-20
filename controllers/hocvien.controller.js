const shortid = require('shortid');

var db = require('../db');


module.exports.index =(req,res)=>{
    res.render('home',{dshv: db.get('dshv').value()}); // render home.pug và truyền dshv trong db vào
};

module.exports.create = (req,res)=>{
    res.render('create');
};

module.exports.search = (req,res)=>{
    let dshvTemp = db.get('dshv').value().filter((hv)=>{
        return hv.fullname.toLowerCase().indexOf(req.query.fullname.toLowerCase()) !== -1; 
    });
    res.render('home',{dshv:dshvTemp});
};

module.exports.viewbyid = (req,res)=>{
    let id = req.params.id;
    let dshvTemp =[];
    dshvTemp.push(db.get('dshv').find({id:id}).value());
    console.log(dshvTemp);
    res.render('viewbyid',{dshv:dshvTemp});
};

module.exports.postCreate = (req,res)=>{
    req.body.id = shortid.generate();
    if(req.body.fullname !== '') {
        dshv = db.get('dshv').push(req.body).value();
        db.write();
        res.redirect('/hocvien');
    }else{
        res.render('noinput');
    }
    

};