// const products = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Headphones",
//     category: "electronics",
//     price: 129.99,
//     originalPrice: 199.99,
//     discount: 35,
//     rating: 4.5,
//     reviewCount: 128,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
//     tags: ["Wireless", "Noise Cancelling", "30h Battery"],
//     isFeatured: true,
//     isNew: true,
//     colors: ["bg-blue-400", "bg-gray-800", "bg-red-400"],
//     stock: 15,
//     isInWishlist: false,
//   },
//   {
//     id: 2,
//     name: "Premium Leather Backpack",
//     category: "bags",
//     price: 89.99,
//     originalPrice: 149.99,
//     discount: 40,
//     rating: 4.7,
//     reviewCount: 203,
//     image:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
//     tags: ["Genuine Leather", "Water Resistant", "Laptop Sleeve"],
//     isFeatured: true,
//     isNew: false,
//     colors: ["bg-amber-700", "bg-black", "bg-brown-600"],
//     stock: 8,
//     isInWishlist: true,
//   },
//   {
//     id: 3,
//     name: "Smart Watch Series 5",
//     category: "electronics",
//     price: 299.99,
//     originalPrice: 399.99,
//     discount: 25,
//     rating: 4.6,
//     reviewCount: 312,
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
//     tags: ["Heart Rate", "GPS", "Waterproof"],
//     isFeatured: false,
//     isNew: true,
//     colors: ["bg-gray-900", "bg-slate-400", "bg-rose-400"],
//     stock: 22,
//     isInWishlist: false,
//   },
//   {
//     id: 4,
//     name: "Running Shoes Pro",
//     category: "footwear",
//     price: 119.99,
//     originalPrice: 179.99,
//     discount: 33,
//     rating: 4.4,
//     reviewCount: 156,
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
//     tags: ["Lightweight", "Breathable", "Shock Absorbing"],
//     isFeatured: true,
//     isNew: false,
//     colors: ["bg-red-500", "bg-blue-500", "bg-black"],
//     stock: 12,
//     isInWishlist: false,
//   },
//   {
//     id: 5,
//     name: "Designer Sunglasses",
//     category: "fashion",
//     price: 89.99,
//     originalPrice: 129.99,
//     discount: 31,
//     rating: 4.3,
//     reviewCount: 89,
//     image:
//       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
//     tags: ["UV Protection", "Polarized", "Style"],
//     isFeatured: false,
//     isNew: true,
//     colors: ["bg-black", "bg-amber-300", "bg-slate-200"],
//     stock: 30,
//     isInWishlist: true,
//   },
//   {
//     id: 6,
//     name: "Organic Face Cream Set",
//     category: "beauty",
//     price: 49.99,
//     originalPrice: 79.99,
//     discount: 38,
//     rating: 4.8,
//     reviewCount: 67,
//     image:
//       "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60",
//     tags: ["Organic", "Vegan", "Cruelty-Free"],
//     isFeatured: true,
//     isNew: false,
//     colors: ["bg-green-100", "bg-white", "bg-amber-50"],
//     stock: 25,
//     isInWishlist: false,
//   },
//   {
//     id: 7,
//     name: "Fitness Tracker Band",
//     category: "electronics",
//     price: 79.99,
//     originalPrice: 129.99,
//     discount: 38,
//     rating: 4.2,
//     reviewCount: 94,
//     image:
//       "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60",
//     tags: ["Activity Tracking", "Sleep Monitor", "Smart"],
//     isFeatured: false,
//     isNew: true,
//     colors: ["bg-black", "bg-pink-400", "bg-blue-500"],
//     stock: 18,
//     isInWishlist: false,
//   },
//   {
//     id: 8,
//     name: "Leather Wallet & Card Holder",
//     category: "accessories",
//     price: 34.99,
//     originalPrice: 59.99,
//     discount: 42,
//     rating: 4.5,
//     reviewCount: 178,
//     image:
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
//     tags: ["Genuine Leather", "RFID Protection", "Compact"],
//     isFeatured: true,
//     isNew: false,
//     colors: ["bg-brown-800", "bg-black", "bg-gray-300"],
//     stock: 40,
//     isInWishlist: false,
//   },
// ];

// export default products;

// import { Schema, model } from "mongoose";
// const mongoose = require("mongoose");

// const ProductsSchema = new Schema(
//   {
//     id: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     originalPrice: {
//       type: Number,
//       required: true,
//     },
//     discount: {
//       type: Number,
//       default: 0,
//     },
//     rating: {
//       type: Number,
//       min: 0,
//       max: 5,
//     },
//     reviewCount: {
//       type: Number,
//       default: 0,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     tags: {
//       type: [String],
//       default: [],
//     },
//     isFeatured: {
//       type: Boolean,
//       default: false,
//     },
//     isNew: {
//       type: Boolean,
//       default: false,
//     },
//     colors: {
//       type: [String],
//       default: [],
//     },
//     stock: {
//       type: Number,
//       default: 0,
//     },
//     isInWishlist: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export default model("Products", ProductsSchema);

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     id: { type: Number, required: true, unique: true },
//     name: { type: String, required: true, trim: true },
//     category: { type: String, required: true },
//     price: { type: Number, required: true },
//     originalPrice: { type: Number, required: true },
//     discount: { type: Number, default: 0 },
//     rating: { type: Number, min: 0, max: 5, default: 0 },
//     reviewCount: { type: Number, default: 0 },
//     image: { type: String, required: true },
//     tags: { type: [String], default: [] },
//     isFeatured: { type: Boolean, default: false },
//     isNew: { type: Boolean, default: false },
//     colors: { type: [String], default: [] },
//     stock: { type: Number, default: 0 },
//     isInWishlist: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("product", productSchema);

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     id: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     category: {
//       type: String,
//       required: true,
//       enum: [
//         "electronics",
//         "bags",
//         "footwear",
//         "fashion",
//         "beauty",
//         "accessories",
//       ], // optional: restrict categories
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     originalPrice: {
//       type: Number,
//       required: true,
//     },
//     discount: {
//       type: Number,
//       required: true,
//       min: 0,
//       max: 100,
//     },
//     rating: {
//       type: Number,
//       required: true,
//       min: 0,
//       max: 5,
//     },
//     reviewCount: {
//       type: Number,
//       default: 0,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     tags: {
//       type: [String],
//       default: [],
//     },
//     isFeatured: {
//       type: Boolean,
//       default: false,
//     },
//     isNew: {
//       type: Boolean,
//       default: false,
//     },
//     colors: {
//       type: [String],
//       default: [],
//     },
//     stock: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     isInWishlist: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", productSchema);

// export default Product;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  rating: Number,
  reviewCount: Number,
  image: String,
  tags: [String],
  isFeatured: Boolean,
  isNew: Boolean,
  colors: [String],
  stock: Number,
  isInWishlist: Boolean,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
