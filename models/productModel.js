import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
