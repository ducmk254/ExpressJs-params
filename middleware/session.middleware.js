const db = require('../db');
const shortid = require('shortid');

module.exports = (req,res,next)=>{

    if(!req.signedCookies.SESSION_ID){
        const SESSION_ID = shortid.generate();
        res.cookie('SESSION_ID',SESSION_ID,{
            signed: true
        });
        db.get('SESSIONS').push({SESSIONID:SESSION_ID}).write();
    }
    next();
};