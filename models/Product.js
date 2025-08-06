// Roots/amazon.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const formatSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String },
  url: { type: String }
});

const bestSellersRankSchema = new Schema({
  category: { type: String, required: true },
  rank: { type: Number, required: true }
});

const productSchema = new Schema({
  asin: { type: String, required: true },
  ISBN10: { type: String },
  answered_questions: { type: Number },
  availability: { type: String },
  brand: { type: String },
  currency: { type: String },
  date_first_available: { type: Date },
  delivery: { type: [String] },
  department: { type: String },
  description: { type: String },
  discount: { type: Number },
  domain: { type: String },
  features: { type: [String] },
  final_price: { type: Number },
  format: { type: [formatSchema] },
  image_url: { type: String },
  images_count: { type: Number },
  initial_price: { type: Number },
  item_weight: { type: String },
  manufacturer: { type: String },
  model_number: { type: String },
  plus_content: { type: Boolean },
  product_dimensions: { type: String },
  rating: { type: String },
  reviews_count: { type: Number },
  root_bs_rank: { type: Number },
  seller_id: { type: String },
  seller_name: { type: String },
  timestamp: { type: Date, required: true },
  title: { type: String, required: true },
  upc: { type: String },
  url: { type: String, required: true },
  video: { type: Boolean },
  video_count: { type: Number },
  categories: { type: [String] },
  best_sellers_rank: { type: [bestSellersRankSchema] }
});

const Product = mongoose.model('Product', productSchema, 'amazon');

module.exports = Product;