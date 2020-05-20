const express = require('express');
var bodyParser = require('body-parser');
const shortid = require('shortid');
const pug = require('pug');

const db = require('./db');
const hvRouter = require('./routers/hocvien.router');

const app = express();
const port = 3000;
var dshv = db.get('dshv').value();


app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));




//  các phương thức GET
app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/hocvien',hvRouter);





app.listen(port, ()=>console.log('Server is started with : ',port,' port'));