import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // custom numeric ID
    name: { type: String, required: true }, // product name
    category: { type: String, required: true }, // e.g. Fruits, Dairy
    price: { type: String, required: true }, // "$2.99" stored as string
    originalPrice: { type: String, required: true }, // "$3.99" stored as string
    discount: { type: String }, // "25% OFF"
    rating: { type: Number, default: 0 }, // numeric rating
    reviewCount: { type: Number, default: 0 }, // number of reviews
    image: { type: String }, // image URL
    tags: { type: [String], default: [] }, // array of strings
    isNewArrival: { type: Boolean, default: false }, // renamed from isNew
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Grocery =
  mongoose.models.Grocery || mongoose.model("Grocery", grocerySchema);

export default Grocery;
