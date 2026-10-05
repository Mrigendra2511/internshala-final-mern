import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema(
    {
        internship: {
            type: Schema.Types.ObjectId,
            ref: "Internship",
            required: true
        },
        applicant: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        status: {
            type: String,
            enum: ["applied", "shortlisted", "rejected"],
            default: "applied"
        },
        coverLetter: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

// Prevent duplicate applications by same user for same internship
applicationSchema.index({ internship: 1, applicant: 1 }, { unique: true });

export const Application = mongoose.model("Application", applicationSchema);