import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/E-Commerce");
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Drop the carts collection to remove old indexes
        try {
            await mongoose.connection.db.dropCollection("carts");
            console.log("✅ Carts collection dropped successfully. New schema will be used.");
        } catch (err) {
            if (err.code === 26) {
                console.log("ℹ️ Carts collection does not exist (nothing to drop).");
            } else {
                console.error("❌ Error dropping collection:", err);
            }
        }

        process.exit(0);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB();
