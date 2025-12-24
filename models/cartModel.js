// // cartModel.js
// import mongoose from "mongoose";

// const cartItemSchema = new mongoose.Schema(
//   {
//     id: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     originalPrice: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       min: 1,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     inStock: {
//       type: Boolean,
//       default: true,
//     },
//     isEligibleForFreeShipping: {
//       type: Boolean,
//       default: false,
//     },
//     isSavedForLater: {
//       type: Boolean,
//       default: false,
//     },
//     isPrimeEligible: {
//       type: Boolean,
//       default: false,
//     },
//     deliveryDate: {
//       type: String,
//     },
//     seller: {
//       type: String,
//       required: true,
//     },
//     color: {
//       type: String,
//     },
//     storage: {
//       type: String,
//     },
//     condition: {
//       type: String,
//     },
//     warranty: {
//       type: String,
//     },
//     maxQuantity: {
//       type: Number,
//       default: 1,
//     },
//     // Optional fields for specific product types
//     type: {
//       type: String, // e.g. "Over-Ear"
//     },
//     batteryLife: {
//       type: String, // e.g. "30 hours"
//     },
//     screenSize: {
//       type: String, // e.g. "6.8 inches"
//     },
//     waterproof: {
//       type: Boolean,
//     },
//     size: {
//       type: String, // e.g. "10"
//     },
//     style: {
//       type: String, // e.g. "Running Shoes"
//     },
//   },
//   { timestamps: true }
// );

// const Cart = mongoose.model("Cart", cartItemSchema);

// export default Cart;

import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    // Reference to the product being added to the cart
    productId: { type: Number, required: true, index: true },
    // Basic product info
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    image: { type: String },
    // Optional extra fields
    originalPrice: { type: Number },
    discount: { type: String },
    rating: { type: Number },
    // Cart specific fields
    quantity: { type: Number, default: 1, min: 1 },
    // Flags
    inStock: { type: Boolean, default: true },
    isPrimeEligible: { type: Boolean, default: false },
    hasFreeShipping: { type: Boolean, default: false },
    // Additional optional metadata
    seller: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);


const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
