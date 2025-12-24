import mongoose from "mongoose";

const electronicsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // custom numeric ID
    name: { type: String, required: true }, // product name
    category: { type: String, default: "Electronics" }, // always "Electronics"
    price: { type: String, required: true }, // "$59.99" stored as string
    originalPrice: { type: String, required: true }, // "$99.99" stored as string
    discount: { type: String }, // "40% OFF"
    rating: { type: Number, default: 0 }, // numeric rating
    reviewCount: { type: Number, default: 0 }, // number of reviews
    image: { type: String }, // image URL
    tags: { type: [String], default: [] }, // array of strings
    isNewArrival: { type: Boolean, default: false }, // renamed from isNew
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Electronic =
  mongoose.models.Electronics ||
  mongoose.model("Electronic", electronicsSchema);

export default Electronic;
