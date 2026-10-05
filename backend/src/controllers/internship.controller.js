import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Internship } from "../models/internship.model.js";

const createInternship = asyncHandler(async (req, res) => {
    const { title, company, location, duration, stipend, skills, aboutCompany, aboutInternship, whoCanApply, perks, numberOfOpenings } = req.body;

    if (!title || !company || !location || !duration || !stipend) {
        throw new ApiError(400, "Title, company, location, duration, and stipend are required");
    }

    const isWfh = location.toLowerCase().includes("work from home") || location.toLowerCase().includes("wfh");

    const internship = await Internship.create({
        title,
        company,
        location,
        duration,
        stipend,
        skills: skills || [],
        aboutCompany: aboutCompany || "",
        aboutInternship: aboutInternship || "",
        whoCanApply: whoCanApply || [],
        perks: perks || [],
        numberOfOpenings: numberOfOpenings || 1,
        isWfh,
        postedBy: req.user?._id
    });

    return res.status(201).json(
        new ApiResponse(201, internship, "Internship created successfully! 🎉")
    );
});

const getAllInternships = asyncHandler(async (req, res) => {
    const { profile, location, wfh } = req.query;

    let query = {};

    if (profile) {
        query.title = { $regex: profile, $options: "i" }; // Case-insensitive search
    }

    if (location) {
        query.location = { $regex: location, $options: "i" };
    }

    if (wfh === "true") {
        query.isWfh = true;
    }

    const internships = await Internship.find(query).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, internships, "Internships fetched successfully")
    );
});

const getInternshipById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const internship = await Internship.findById(id);

    if (!internship) {
        throw new ApiError(404, "Internship not found");
    }

    return res.status(200).json(
        new ApiResponse(200, internship, "Internship fetched successfully")
    );
});

const deleteInternship = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const internship = await Internship.findByIdAndDelete(id);

    if (!internship) {
        throw new ApiError(404, "Internship not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Internship deleted successfully")
    );
});

export {
    createInternship,
    getAllInternships,
    getInternshipById,
    deleteInternship
};