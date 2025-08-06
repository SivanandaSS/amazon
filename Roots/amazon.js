// Roots/amazon.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


/* La manière standard et recommandée de construire une API 
    est de suivre la convention chemin?paramètre=valeur. */

//example   http://localhost:8000/amazon/available-stock

// Exemple GET all books
router.get('/all', async (req, res) => {
  const products = await Product.find();
  console.log('Produits trouvés :', products);
  res.json(products);
//   http://localhost:8000/amazon/all
});

// Exemple GET available stock only 
router.get('/available-stock', async (req, res) => {
  const availableStocks = await Product.find({availability: 'In Stock.'});
  //console.log('Produits trouvés :', products);
 
  res.json(availableStocks);
//   http://localhost:8000/amazon/available-stock

});


// Exemple GET /format [name: kindle] only 
router.get('/kindle', async (req, res) => {
  const kindleBooks = await Product.find({'format': 'Kindle'});
  //console.log('Produits trouvés :', products);
  
  res.json(kindleBooks);
//   http://localhost:8000/amazon/Kindle

});

// Exemple GET /by format dynamic (all formats) 
router.get('/format', async (req, res) => {
  const formatName = req.query.name; // GET  format by url
  
  const formatByName = await Product.find({'format.name' : formatName}, {_id:0, 'format.$':1}); // format is a table
 
  // si l'affichage de certaine ligne pas d'autre:: example :: ({'format.name' : formatName}, {title:1, 'format.$':1, _id:0});
  // {format:1} envoie tout le tableau, mais avec $, envoi specific element 
 
  res.json(formatByName);
    // http://localhost:8000/amazon/format?name=Audiobook
});

// Exemple GET /by category dynamic (all categorys) 
router.get('/category', async (req, res) => {
  const categoryName = req.query.name; // GET caterory from url
  
  const categoryByName = await Product.find({'categories' : categoryName}); // category is a table
  // si l'affichage de certaine ligne pas d'autre:: example :: dessus
  
  res.json(categoryByName);
// http://localhost:8000/amazon/category?name=Literature%20&%20Fiction

});

// Exemple GET /price min & max {'final_price':{$gt:,$lt:}}
router.get('/price', async (req, res) => {
  const minPrice = req.query.min
  const maxPrice = req.query.max
  
  //create an empty objet for query
  const filter = {};

  // min  or max price must be given
    if(minPrice || maxPrice){
        // build an empty dynamic object to filter for price
        filter.final_price = {};
        // use the property $gte, $lte to store the value in filter object
        filter.final_price.$gte = minPrice;
        filter.final_price.$lte = maxPrice;
    }
    
  const filterByPrice = await Product.find(filter); // 
 
  res.json(filterByPrice);
//   http://localhost:8000/amazon/price?min=5&max=10

});

// Exemple GET /rating min & max {'rating':{$gt:,$lt:}}
// Aggregation Pipeline
router.get('/rating', async (req, res) => {
  const minRating = req.query.min
  const maxRating = req.query.max
  
  //create an empty objet for query
  const filter = {};

  // min  or max price must be given
    if(minRating || maxRating){
        // build an empty dynamic object to filter for price
        filter.rating = {};
        // use the property $gte, $lte to store the value in filter object
        filter.rating.$gte = parseFloat(minRating);
        filter.rating.$lte = parseFloat(maxRating);
    }
    
  const filterByRating = await Product.find(filter); // 
 
  res.json(filterByRating);
//   http://localhost:8000/amazon/rating?min=5&max=10

});


module.exports = router;
