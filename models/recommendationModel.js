// const mongoose = require("mongoose");
import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

export default mongoose.model("Recommendation", recommendationSchema);
