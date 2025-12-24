// import mongoose from "mongoose";

// const footwearSchema = new mongoose.Schema(
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
//       default: "Footwear",
//     },
//     price: {
//       type: String, // e.g. "$69.99"
//       required: true,
//     },
//     originalPrice: {
//       type: String, // e.g. "$99.99"
//       required: true,
//     },
//     discount: {
//       type: String, // e.g. "30% OFF"
//       required: true,
//     },
//     rating: {
//       type: Number,
//       min: 0,
//       max: 5,
//       required: true,
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
//     isNew: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// // ✅ Prevent OverwriteModelError
// const Footwear =
//   mongoose.models.Footwear || mongoose.model("Footwear", footwearSchema);

// export default Footwear;

// import mongoose from "mongoose";

// const footwearSchema = new mongoose.Schema(
//   {
//     id: Number,
//     name: String,
//     category: String,
//     price: Number,
//     originalPrice: Number,
//     discount: Number,
//     rating: Number,
//     reviewCount: Number,
//     image: String,
//     tags: [String],
//     isFeatured: Boolean,
//     isNew: Boolean,
//     colors: [String],
//     stock: Number,
//     isInWishlist: Boolean,
//   },
//   { timestamps: true }
// );

// // ✅ Prevent OverwriteModelError
// const Product =
//   mongoose.models.Footwear || mongoose.model("Footwear", footwearSchema);

// export default Footwear;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";

// const footwearSchema = new mongoose.Schema(
//   {
//     id: Number,
//     name: String,
//     category: String,
//     price: Number,
//     originalPrice: Number,
//     discount: Number,
//     rating: Number,
//     reviewCount: Number,
//     image: String,
//     tags: [String],
//     isFeatured: Boolean,
//     isNew: Boolean,
//     colors: [String],
//     stock: Number,
//     isInWishlist: Boolean,
//   },
//   { timestamps: true }
// );

// // ✅ Prevent OverwriteModelError
// const Footwear =
//   mongoose.models.Footwear || mongoose.model("Footwear", footwearSchema);
// export default Footwear;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// import mongoose from "mongoose";

// const footwearSchema = new mongoose.Schema(
//   {
//     id: Number,
//     name: String,
//     category: String,
//     price: Number,
//     originalPrice: Number,
//     discount: Number,
//     rating: Number,
//     reviewCount: Number,
//     image: String,
//     tags: [String],
//     isFeatured: Boolean,
//     isNew: Boolean,
//     colors: [String],
//     stock: Number,
//     isInWishlist: Boolean,
//   },
//   { timestamps: true }
// );

// // ✅ Prevent OverwriteModelError
// const Footwear =
//   mongoose.models.Footwear || mongoose.model("Footwear", footwearSchema);

// export default Footwear;

import mongoose from "mongoose";

const footwearSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // custom numeric ID
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true }, // stored as string "$99.99"
    originalPrice: { type: String, required: true }, // stored as string "$149.99"
    discount: { type: String }, // e.g. "33% OFF"
    rating: { type: Number, default: 0 }, // numeric rating
    reviewCount: { type: Number, default: 0 },
    image: { type: String }, // URL string
    tags: { type: [String], default: [] }, // array of strings
    isNewArrival: { type: Boolean, default: false }, // ✅ renamed from isNew
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Footwear =
  mongoose.models.Footwear || mongoose.model("Footwear", footwearSchema);

export default Footwear;
