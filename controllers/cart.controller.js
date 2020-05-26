const db = require('../db');
module.exports.addToCart = (req,res)=>{
    const productId = req.params.productId;
    const session_id = req.signedCookies.SESSION_ID;
    if(!session_id){
        res.redirect('/products');
        return;
    }
    const count = db.get('SESSIONS')
                    .find({SESSIONID:session_id})
                    .get('cart.'+ productId, 0) // nếu cart.productID ko tồn tại thì sẽ gán cho số lượng là 0
                    .value();
    db.get('SESSIONS')
    .find({SESSIONID:session_id})
    .set('cart.'+ productId,count + 1)
    .write();

    res.redirect('/products');
};