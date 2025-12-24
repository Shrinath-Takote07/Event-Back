import express from "express";
import Cart from "../models/cartModel.js";

const router = express.Router();

// ➕ Add item to cart
router.post("/", async (req, res) => {
  try {
    const { productId, name, price, quantity, ...rest } = req.body;

    // Validate required fields
    if (!productId || !name || price == null) {
      return res
        .status(400)
        .json({ error: "Missing required fields (productId, name, price)" });
    }

    // Always create a new cart entry (no merging) due to user request for "different id"
    const newItem = new Cart({
      productId,
      name,
      price,
      quantity: quantity || 1,
      ...rest,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    console.error("❌ Error adding to cart:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// 📋 Get all cart items
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items", error });
  }
});

// ❌ Remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Error removing item", error });
  }
});

export default router;
