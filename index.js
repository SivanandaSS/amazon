// on inclut express
const express =require ('express');
const mongoose = require('mongoose');
const cors = require('cors');

//notre applicatoin est une express
const app = express(); // to create express application
app.use(cors());
app.use(express.json());

mongoose.set('debug', true);
// pour avoir l'accée de db partout dans l'application
let db = mongoose.connection;

// every roots start by amazon
app.use((req, res, next) => {
    req.db = db;
    next(); // pour passer à la prochaine fnc
});

// every roots start by amazon
let productRouter = require('./Roots/amazon.js');
app.use('/amazon', productRouter) // amazon.js dans le repertoir Roots


const start = async () => 
{
    try {
        await mongoose.connect("mongodb://localhost:27017/amazon");
        
        // on lance notre serveur pour avoir DB
        app.listen(8000, () => {
    
        console.log('Example app listening on port 8000!');
});
    }
    catch(e){
        console.log(e);
    }
}

start();