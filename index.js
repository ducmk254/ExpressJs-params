require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
const shortid = require('shortid');
const pug = require('pug');
var cookieParser = require('cookie-parser');

const db = require('./db');
const hvRouter = require('./routers/hocvien.router');
const authRouter =require('./routers/auth.router');
const middleware = require('./middleware/auth.middleware');

const app = express();
const port = 3000;



app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // khai báo rằng các file static được lưu trong thư mục public, có thể láy ra để sử dụng dạng link
app.use(cookieParser(process.env.SESSION_SECRET));



//  các phương thức GET
app.get('/',(req,res)=>{
    res.render('index');
})


app.use('/hocvien',middleware.requireAuth,hvRouter); // protect /hocvien phải login trước
app.use('/auth',authRouter);




app.listen(port, ()=>console.log('Server is started with : ',port,' port'));