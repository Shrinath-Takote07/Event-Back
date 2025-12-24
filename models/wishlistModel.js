import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // custom numeric ID
    name: { type: String, required: true }, // product name
    description: { type: String, default: "" }, // product description
    price: { type: Number, default: 0 }, // current price
    originalPrice: { type: Number, default: 0 }, // original price
    image: { type: String, default: "" }, // product image URL
    category: { type: String, required: true }, // electronics, home, etc.
    inStock: { type: Boolean, default: true },
    isPrimeEligible: { type: Boolean, default: false },
    isOnSale: { type: Boolean, default: false },
    hasFreeShipping: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    seller: { type: String, default: "" },
    deliveryDate: { type: String, default: "" },
    // Optional product-specific fields
    color: { type: String, default: "" },
    storage: { type: String, default: "" },
    memory: { type: String, default: "" },
    edition: { type: String, default: "" },
    model: { type: String, default: "" },
    screenSize: { type: String, default: "" },
    resolution: { type: String, default: "" },
    smartFeatures: { type: String, default: "" },
    capacity: { type: String, default: "" },
    type: { type: String, default: "" },
    runTime: { type: String, default: "" },
    features: { type: String, default: "" },
    warranty: { type: String, default: "" },
    // Price tracking
    lastPriceDrop: { type: Number, default: 0 },
    priceDropDate: { type: String, default: "" },
    stockLeft: { type: Number, default: 0 },
    isPriceWatched: { type: Boolean, default: false },
    watchedPrice: { type: Number, default: 0 },
    restockDate: { type: String, default: "" },
    // Additional fields for UI
    isNew: { type: Boolean, default: false },
    discount: { type: String, default: "" },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
