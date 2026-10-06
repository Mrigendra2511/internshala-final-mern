import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI || process.env.MONGO_URI;

        if (!connectionString) {
            throw new Error("MongoDB Connection String missing in Environment Variables!");
        }

        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error);
        process.exit(1);
    }
}

export default connectDB;