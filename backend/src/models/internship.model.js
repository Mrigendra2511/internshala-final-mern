import mongoose, { Schema } from "mongoose";

const internshipSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            index: true
        },
        company: {
            type: String,
            required: [true, "Company name is required"],
            trim: true
        },
        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true
        },
        duration: {
            type: String,
            required: [true, "Duration is required"]
        },
        stipend: {
            type: String,
            required: [true, "Stipend is required"]
        },
        skills: {
            type: [String],
            default: []
        },
        aboutCompany: {
            type: String,
            default: ""
        },
        aboutInternship: {
            type: String,
            default: ""
        },
        whoCanApply: {
            type: [String],
            default: []
        },
        perks: {
            type: [String],
            default: []
        },
        numberOfOpenings: {
            type: Number,
            default: 1
        },
        isWfh: {
            type: Boolean,
            default: false
        },
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

export const Internship = mongoose.model("Internship", internshipSchema);