import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        role: {
            type: String,
            enum: ["student", "employer"],
            default: "student",
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// 🎯 FIX: 'next' PARAMETER AND CALL REMOVED FOR ASYNC HOOK!
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

// Password match karne ka method
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Access Token generate karna
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET || "access-token-secret-key",
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d",
        }
    );
};

// Refresh Token generate karna
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-key",
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "10d",
        }
    );
};

export const User = mongoose.model("User", userSchema);