import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// Routes

import cors from 'cors';
import categoryRoute from './routes/categoryRoute';

const app = express();
dotenv.config();

//config cau hinh

// const config = require('config');
// const dbConfig = config.get('Customer.dbConfig');

mongoose.connect('mongodb://localhost:27017/anicon', {useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', function(err){
    if(err) console.log(err)
});
db.once('open', function(){
    console.log("Kết nối thành công")
})

//end config cau hinh

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: false,
//     useCreateIndex: true
// }).then(() => {
//     console.log(`Database connected`)
// });
// mongoose.connection.on('Error', err => {
//     console.log(`Data connected false, ${err.message} `);
// })

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
    origin : '*',
    credentials: true
}))

// routes middleware


app.use('/api', categoryRoute);


const port = process.env.PORT || 8000
app.listen(port, () => { 
    console.log(`Server is runing in port: ${port}`);
})