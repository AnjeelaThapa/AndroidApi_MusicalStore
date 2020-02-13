const Express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const port = 3000;

const url = 'mongodb://localhost:27017/musicalstoreAndriod';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

connect.then((db) => {
    console.log("Connected to mongodb server");
}, (err) => { console.log(err); });

const express = new Express();
express.use(bodyParser.json());
express.use(cors())
express.use(Express.urlencoded({extended:false}))


const userRoute = require('./routers/index')
const categoryRoute = require('./routers/category.js')
const instrumentRoute = require('./routers/instruments.js')
const orderRoute = require('./routers/orders.js')
const contactRoute = require('./routers/contactUs.js')
const uploadRoute = require('./upload')


express.use('/user',userRoute)
express.use('/category', categoryRoute);
express.use('/instruments', instrumentRoute);
express.use('/orders', orderRoute);
express.use('/contact', contactRoute);

express.use(Express.static(path.join(__dirname+'/public/uploads')))
express.use('/upload', uploadRoute);

express.get('/',(req,res)=>{
    res.send("Server is up and runasdasdning")
})

express.listen(port,'localhost',()=>{
    console.log("Server started at port "+port);
})