var db = require('../db');
var md5 = require('md5');

module.exports.login = (req,res)=>{
    res.render('auth/login');
};
module.exports.postLogin = (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    let user = db.get('dshv').find({email:email}).value();
    if(!user){
        res.render('auth/login',{
           errors: ['User does not exist.'] ,
           values: req.body
        });
        return;
    }
    if(user.password !== md5(password)){
        res.render('auth/login',{
            errors: ['Wrong password'],
            values: req.body
         });
         return;
    }

    
    res.cookie('userId',user.id,{
        signed: true
    });
    res.redirect('/hocvien');
};