// import express from "express";
// import Wishlist from "../models/wishlistModel.js";

// const router = express.Router();

// // Add to wishlist
// router.post("/", async (req, res) => {
//   try {
//     const product = req.body;
//     const item = new Wishlist(product);
//     await item.save();
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Remove from wishlist
// router.delete("/:id", async (req, res) => {
//   try {
//     await Wishlist.findOneAndDelete({ id: req.params.id });
//     res.status(200).json({ message: "Removed from wishlist" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all wishlist items
// router.get("/", async (req, res) => {
//   try {
//     const items = await Wishlist.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;

// routes/wishlistRoutes.js
import express from "express";
import Wishlist from "../models/wishlist.js";

const router = express.Router();

// Get all wishlist items
router.get("/", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add to wishlist
router.post("/", async (req, res) => {
  try {
    const product = req.body;

    // Check if item already exists in wishlist
    const existingItem = await Wishlist.findOne({ id: product.id });
    if (existingItem) {
      return res.status(400).json({ message: "Item already in wishlist" });
    }

    // Convert price string to number if it's a string (e.g., "$49.99" -> 49.99)
    let priceValue = product.price;
    if (typeof priceValue === "string") {
      priceValue = parseFloat(priceValue.replace(/[^0-9.-]+/g, ""));
    }

    let originalPriceValue = product.originalPrice;
    if (typeof originalPriceValue === "string") {
      originalPriceValue = parseFloat(
        originalPriceValue.replace(/[^0-9.-]+/g, "")
      );
    }

    // Create wishlist item with required fields
    const itemData = {
      id: product.id,
      name: product.name || "Unknown Product",
      description: product.description || "",
      price: priceValue || 0,
      originalPrice: originalPriceValue || 0,
      image: product.image || "",
      category: product.category || "General",
      inStock: product.inStock !== undefined ? product.inStock : true,
      isPrimeEligible: product.isPrimeEligible || false,
      isOnSale: product.isOnSale || false,
      hasFreeShipping: product.hasFreeShipping || false,
      rating: product.rating || 0,
      reviewCount: product.reviewCount || 0,
      seller: product.seller || "",
      deliveryDate: product.deliveryDate || "",
      // Optional fields
      color: product.color || "",
      storage: product.storage || "",
      memory: product.memory || "",
      edition: product.edition || "",
      model: product.model || "",
      screenSize: product.screenSize || "",
      resolution: product.resolution || "",
      smartFeatures: product.smartFeatures || "",
      capacity: product.capacity || "",
      type: product.type || "",
      runTime: product.runTime || "",
      features: product.features || "",
      warranty: product.warranty || "",
      isNew: product.isNew || false,
      discount: product.discount || "",
      tags: product.tags || [],
    };

    const item = new Wishlist(itemData);
    await item.save();
    res.status(201).json({ message: "Item added to wishlist", item });
  } catch (err) {
    console.error("Error adding to wishlist:", err);
    res.status(500).json({ error: err.message });
  }
});

// Delete a wishlist item by ID
router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    // Try to delete by custom id field first
    let result = await Wishlist.findOneAndDelete({ id: parseInt(itemId) });

    // If not found, try to delete by MongoDB _id
    if (!result) {
      result = await Wishlist.findByIdAndDelete(itemId);
    }

    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }

    res
      .status(200)
      .json({ message: "Item removed from wishlist", deletedItem: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
