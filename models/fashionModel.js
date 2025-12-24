import mongoose from "mongoose";

const fashionSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // custom numeric ID
    name: { type: String, required: true }, // product name
    category: { type: String, default: "Fashion" }, // always "Fashion"
    price: { type: String, required: true }, // "$49.99" stored as string
    originalPrice: { type: String, required: true }, // "$79.99" stored as string
    discount: { type: String }, // "38% OFF"
    rating: { type: Number, default: 0 }, // numeric rating
    reviewCount: { type: Number, default: 0 }, // number of reviews
    image: { type: String }, // image URL
    tags: { type: [String], default: [] }, // array of strings
    isNewArrival: { type: Boolean, default: false }, // renamed from isNew
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Fashion =
  mongoose.models.Fashion || mongoose.model("Fashion", fashionSchema);

export default Fashion;
