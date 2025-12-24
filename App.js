import express from "express";
import cors from "cors";
// import User from "./User.js";
// import Bags from "./Bags.js";

// import Electronics from "./Electronics.js";

// import Fashion from "./Fashion.js";
// import Groceries from "./Groceries.js";

import Beauty from "./Beauty.js";
import mongoose from "mongoose";

// import dotenv from "dotenv";
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 8080;
const URI = process.env.MONGODBURI;

import dotenv from "dotenv";

dotenv.config();

let isconnect = false;

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGODBURI); // Debug
    await mongoose.connect(process.env.MONGODBURI); // no extra options needed
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
connectDB();
// let isconnect=false;

app.get("/", (req, res) => {
  res.send("API is Running");
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// for to the wishlist
// import Product from "./models/productModel.js";
import Wishlist from "./models/wishlistModel.js";
app.get("/api/wishlist", async (req, res) => {
  try {
    const wishlists = await Wishlist.find(); // fetch from MongoDB
    console.log("📦 All wishlists requested");
    console.log(wishlists); // logs actual array of product documents
    res.status(200).json(wishlists);
  } catch (error) {
    console.error("❌ Error fetching wishlists:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single wishlist by ID
app.get("/api/wishlist/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 wishlist requested with ID: ${req.params.id}`);
    console.log(wishlist);

    if (wishlist) {
      res.status(200).json(wishlist);
    } else {
      res.status(404).json({ error: "wishlist not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching wishlist:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// POST - Add to wishlist
app.post("/api/wishlist", async (req, res) => {
  try {
    const {
      id,
      name,
      price,
      category,
      image,
      originalPrice,
      discount,
      rating,
      reviewCount,
      isNew,
      tags,
      description,
    } = req.body;

    // Validate required fields
    if (!id || !name || !category) {
      return res
        .status(400)
        .json({ error: "Missing required fields: id, name, category" });
    }

    // Check if item already exists in wishlist
    const existing = await Wishlist.findOne({ id });
    if (existing) {
      console.log(`⚠️ Item ${id} already in wishlist`);
      return res.status(409).json({ error: "Item already in wishlist" });
    }

    // Convert price string to number if it's a string (e.g., "$49.99" -> 49.99)
    let priceValue = price;
    if (typeof priceValue === "string") {
      priceValue = parseFloat(priceValue.replace(/[^0-9.-]+/g, ""));
    }

    let originalPriceValue = originalPrice;
    if (typeof originalPriceValue === "string") {
      originalPriceValue = parseFloat(
        originalPriceValue.replace(/[^0-9.-]+/g, "")
      );
    }

    // Create new wishlist item
    const newItem = new Wishlist({
      id,
      name,
      price: priceValue || 0,
      category,
      image: image || "",
      originalPrice: originalPriceValue || priceValue || 0,
      rating: rating || 0,
      reviewCount: reviewCount || 0,
      isNew: isNew || false,
      discount: discount || "",
      tags: tags || [],
      description: description || "",
    });

    await newItem.save();
    console.log("✅ Item added to wishlist:", newItem);
    res
      .status(201)
      .json({ message: "Item successfully added to wishlist!", item: newItem });
  } catch (error) {
    console.error("❌ Error adding to wishlist:", error.message);
    res
      .status(500)
      .json({ error: "Failed to add to wishlist", details: error.message });
  }
});

// DELETE - Remove from wishlist
app.delete("/api/wishlist/:id", async (req, res) => {
  try {
    const itemId = parseInt(req.params.id, 10);
    const deleted = await Wishlist.findOneAndDelete({ id: itemId });

    if (deleted) {
      console.log("✅ Item removed from wishlist:", deleted);
      res.status(200).json({ message: "Removed from wishlist", data: deleted });
    } else {
      res.status(404).json({ error: "Item not found in wishlist" });
    }
  } catch (error) {
    console.error("❌ Error removing from wishlist:", error.message);
    res.status(500).json({ error: "Failed to remove from wishlist" });
  }
});

// /////////////////////////////////////////////////////////////////////////////////////////////////////// for to the trending shops///////////////////////////////////////////////////////////////////////////////// that is correccted
import Product from "./models/productModel.js";
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); // fetch from MongoDB
    console.log("📦 All products requested");
    console.log(products); // logs actual array of product documents
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: parseInt(req.params.id, 10) });
    console.log(`🔍 Product requested with ID: ${req.params.id}`);
    console.log(product);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching product:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// featch bags from backend

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////// Bags
// import Electronic from "./models/electronicModel.js";
import Bag from "./models/bagModel.js";
app.get("/api/Bags", async (req, res) => {
  try {
    const bags = await Bag.find(); // fetch from MongoDB
    console.log("📦 All Bag requested");
    console.log(bags); // logs actual array of product documents
    res.status(200).json(bags);
  } catch (error) {
    console.error("❌ Error fetching Bag:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/Bags/:id", async (req, res) => {
  try {
    const bag = await Bag.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Bag requested with ID: ${req.params.id}`);
    console.log(bag);

    if (bag) {
      res.status(200).json(bag);
    } else {
      res.status(404).json({ error: "bag not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching electronic:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// //////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// for electronincs
import Electronic from "./models/electronicModel.js";
app.get("/api/electronics", async (req, res) => {
  try {
    const electronics = await Electronic.find(); // fetch from MongoDB
    console.log("📦 All footwear requested");
    console.log(electronics); // logs actual array of product documents
    res.status(200).json(electronics);
  } catch (error) {
    console.error("❌ Error fetching electronic:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/electronics/:id", async (req, res) => {
  try {
    const electronic = await Electronic.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 electronic requested with ID: ${req.params.id}`);
    console.log(electronic);

    if (electronic) {
      res.status(200).json(electronic);
    } else {
      res.status(404).json({ error: "electronic not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching electronic:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// generate fashion

// import Bag from "./models/bagModel.js";
import Fashion from "./models/fashionModel.js";
app.get("/api/Fashions", async (req, res) => {
  try {
    const fashions = await Fashion.find(); // fetch from MongoDB
    console.log("📦 All Fashion requested");
    console.log(fashions); // logs actual array of product documents
    res.status(200).json(fashions);
  } catch (error) {
    console.error("❌ Error fetching Bag:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/Fashions/:id", async (req, res) => {
  try {
    const fashion = await Fashion.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Fashion requested with ID: ${req.params.id}`);
    console.log(fashion);

    if (fashion) {
      res.status(200).json(fashion);
    } else {
      res.status(404).json({ error: "fashion not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching fashion:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// for Footware
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// corrected footwere
import Footwear from "./models/footwearModel.js";
app.get("/api/footwears", async (req, res) => {
  try {
    const footwears = await Footwear.find(); // fetch from MongoDB
    console.log("📦 All footwear requested");
    console.log(footwears); // logs actual array of product documents
    res.status(200).json(footwears);
  } catch (error) {
    console.error("❌ Error fetching footwear:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/footwears/:id", async (req, res) => {
  try {
    const footwear = await Footwear.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Footwear requested with ID: ${req.params.id}`);
    console.log(footwear);

    if (footwear) {
      res.status(200).json(footwear);
    } else {
      res.status(404).json({ error: "Footwear not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching Footwear:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// for the groseries
// import Groceries from "./models/fashionModel.js";
import Grocery from "./models/grocerieModel.js";
app.get("/api/Groceries", async (req, res) => {
  try {
    const groceries = await Grocery.find(); // fetch from MongoDB
    console.log("📦 All Fashion requested");
    console.log(groceries); // logs actual array of product documents
    res.status(200).json(groceries);
  } catch (error) {
    console.error("❌ Error fetching Bag:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/Groceries/:id", async (req, res) => {
  try {
    const grocerie = await Grocery.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Fashion requested with ID: ${req.params.id}`);
    console.log(grocerie);

    if (grocerie) {
      res.status(200).json(grocerie);
    } else {
      res.status(404).json({ error: "grocerie not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching grocerie:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Beauty/////////////////////////////////////////////////////////////////////////////////////

app.get("/api/Beauty", (req, res) => {
  res.status(200).json(Beauty);
});

// GET single product by ID
app.get("/api/Beauty/:id", (req, res) => {
  const BeautyId = parseInt(req.params.id, 10);
  const beautyItem = Beauty.find((item) => item.id === BeautyId);

  if (beautyItem) {
    res.status(200).json(beautyItem);
  } else {
    res.status(404).json({ error: "Beauty not found" });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import wishlistRoutes from "./routes/wishlisting.js";
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Add to cart /////////////////////////////////////////////////////////////////////////////////////
//
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/api/wishlist", async (req, res) => {
  try {
    const newItem = new Wishlist(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/wishlist", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ////////////////////////////////////////////////////////////////////////////////////// add to cart
// import
// app.post("/api/cart", async (req, res) => {
//   try {
//     const newItem = new Wishlist(req.body);
//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get("/api/cart", async (req, res) => {
//   try {
//     const items = await Wishlist.find();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POST - Add to cart
//

// import Grocery from "./models/grocerieModel.js";
// import Cart from "./models/cartModel.js";
// import cartModel from "./models/cartModel.js";
import Cart from "./models/cartModel.js";
// app.get("/api/Carts", async (req, res) => {
//   try {
//     const carts = await Cart.find(); // fetch from MongoDB
//     console.log("📦 All Fashion requested");
//     console.log(carts); // logs actual array of product documents
//     res.status(200).json(carts);
//   } catch (error) {
//     console.error("❌ Error fetching Bag:", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// // GET single product by ID
// app.get("/api/Carts/:id", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({
//       id: parseInt(req.params.id, 10),
//     });
//     console.log(`🔍 Fashion requested with ID: ${req.params.id}`);
//     console.log(cart);

//     if (cart) {
//       res.status(200).json(cart);
//     } else {
//       res.status(404).json({ error: "grocerie not found" });
//     }
//   } catch (error) {
//     console.error("❌ Error fetching grocerie:", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });
app.get("/api/carts", async (req, res) => {
  try {
    const carts = await Cart.find(); // fetch from MongoDB
    console.log("📦 All cart items requested");
    console.log(carts);
    res.status(200).json(carts);
  } catch (error) {
    console.error("❌ Error fetching carts:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single cart item by custom numeric ID
app.get("/api/carts/:id", async (req, res) => {
  try {
    const cart = await Cart.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Cart item requested with ID: ${req.params.id}`);
    console.log(cart);

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching cart item:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET - Get all cart items
app.get("/api/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    console.log("📦 All cart items requested");
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("❌ Error fetching cart items:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// GET - Get single cart item by ID
app.get("/api/cart/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findOne({ id: parseInt(req.params.id, 10) });
    if (cartItem) {
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching cart item:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// POST - Add item to cart
app.post("/api/cart", async (req, res) => {
  try {
    const { id, name, price, category, image, description } = req.body;

    if (!id || !name || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if item already exists
    const existing = await Cart.findOne({ id: parseInt(id, 10) });
    if (existing) {
      existing.quantity = (existing.quantity || 1) + (req.body.quantity || 1);
      const updated = await existing.save();
      return res
        .status(200)
        .json({ message: "Quantity updated", item: updated });
    }

    const newItem = new Cart({
      id: parseInt(id, 10),
      name,
      price: parseFloat(price),
      quantity: req.body.quantity || 1,
      category,
      image: image || "",
      description: description || "",
    });

    await newItem.save();
    console.log("✅ Item added to cart:", newItem);
    res.status(201).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    console.error("❌ Error adding to cart:", error.message);
    res
      .status(500)
      .json({ error: "Failed to add to cart", details: error.message });
  }
});

// PUT - Update cart item quantity
app.put("/api/cart/:id", async (req, res) => {
  try {
    const itemId = parseInt(req.params.id, 10);
    const { quantity } = req.body;

    if (!quantity || quantity < 0) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    if (quantity === 0) {
      // Delete if quantity is 0
      const deleted = await Cart.findOneAndDelete({ id: itemId });
      if (deleted) {
        console.log("✅ Item removed from cart:", deleted);
        return res.status(200).json({ message: "Item removed", data: deleted });
      } else {
        return res.status(404).json({ error: "Item not found" });
      }
    }

    const updated = await Cart.findOneAndUpdate(
      { id: itemId },
      { quantity: quantity },
      { new: true }
    );

    if (updated) {
      console.log("✅ Cart item quantity updated:", updated);
      res.status(200).json({ message: "Quantity updated", data: updated });
    } else {
      res.status(404).json({ error: "Item not found in cart" });
    }
  } catch (error) {
    console.error("❌ Error updating cart:", error.message);
    res
      .status(500)
      .json({ error: "Failed to update cart", details: error.message });
  }
});

// DELETE - Remove item from cart
app.delete("/api/cart/:id", async (req, res) => {
  try {
    const itemId = parseInt(req.params.id, 10);
    const deleted = await Cart.findOneAndDelete({ id: itemId });

    if (deleted) {
      console.log("✅ Item deleted from cart:", deleted);
      res
        .status(200)
        .json({ message: "Item removed from cart", data: deleted });
    } else {
      res.status(404).json({ error: "Item not found in cart" });
    }
  } catch (error) {
    console.error("❌ Error deleting from cart:", error.message);
    res
      .status(500)
      .json({ error: "Failed to delete from cart", details: error.message });
  }
});

// POST - Seed cart with test data
app.post("/api/cart/seed/data", async (req, res) => {
  try {
    await Cart.deleteMany({});

    const testItems = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        quantity: 1,
        category: "electronics",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
        description: "High-quality wireless headphones with noise cancellation",
      },
      {
        id: 2,
        name: "USB-C Cable",
        price: 12.99,
        quantity: 2,
        category: "electronics",
        image: "https://via.placeholder.com/200?text=USB+Cable",
        description: "Durable USB-C charging cable",
      },
      {
        id: 3,
        name: "Phone Case",
        price: 19.99,
        quantity: 1,
        category: "accessories",
        image: "https://via.placeholder.com/200?text=Phone+Case",
        description: "Protective phone case with shock absorption",
      },
    ];

    const saved = await Cart.insertMany(testItems);
    console.log("✅ Cart seeded with test data");
    res.status(201).json({ message: "Cart seeded successfully", items: saved });
  } catch (error) {
    console.error("❌ Error seeding cart:", error.message);
    res
      .status(500)
      .json({ error: "Failed to seed cart", details: error.message });
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// to add the in cart
// POST: Add item to cart

// DELETE: Remove item from cart

// ///////////////////////////////////////////////////////////////////////////////////// for the recommendations
// import Grocery from "./models/grocerieModel.js";
import Recommendation from "./models/recommendationModel.js";
app.get("/api/recommendations", async (req, res) => {
  try {
    const recommendations = await Recommendation.find(); // fetch from MongoDB
    console.log("📦 All Recommendation requested");
    console.log(recommendations); // logs actual array of product documents
    res.status(200).json(recommendations);
  } catch (error) {
    console.error("❌ Error fetching Recommendation:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});
// GET single product by ID
app.get("/api/recommendations/:id", async (req, res) => {
  try {
    const recommendation = await Recommendation.findOne({
      id: parseInt(req.params.id, 10),
    });
    console.log(`🔍 Recommendation requested with ID: ${req.params.id}`);
    console.log(recommendation);

    if (recommendation) {
      res.status(200).json(recommendation);
    } else {
      res.status(404).json({ error: "recommendation not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching recommendation:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// whishlixst to add to cart
import cartRoutes from "./routes/cartRoutes.js";
app.use("/api/carts", cartRoutes);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start server
// app.listen(Port, () => {
//   console.log(`Server running on http://localhost:${Port}`);
// });
module.exports = app;
