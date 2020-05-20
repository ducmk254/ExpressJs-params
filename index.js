const express = require('express');
var bodyParser = require('body-parser');
const shortid = require('shortid');
const pug = require('pug');
var cookieParser = require('cookie-parser')

const db = require('./db');
const hvRouter = require('./routers/hocvien.router');

const app = express();
const port = 3000;



app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // khai báo rằng các file static được lưu trong thư mục public, có thể láy ra để sử dụng dạng link
app.use(cookieParser());


//  các phương thức GET
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/cookie',(req,res,next)=>{
    res.cookie('user-id',12345);
    res.send('finish set cookie');
});

app.use('/hocvien',hvRouter);





app.listen(port, ()=>console.log('Server is started with : ',port,' port'));