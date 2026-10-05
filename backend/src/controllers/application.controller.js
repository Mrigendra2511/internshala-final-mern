import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Application } from "../models/application.model.js";
import { Internship } from "../models/internship.model.js";

// 1️⃣ Apply for an Internship (Student)
const applyForInternship = asyncHandler(async (req, res) => {
    const { internshipId, coverLetter } = req.body;

    if (!internshipId) {
        throw new ApiError(400, "Internship ID is required");
    }

    const internship = await Internship.findById(internshipId);
    if (!internship) {
        throw new ApiError(404, "Internship not found");
    }

    const existingApplication = await Application.findOne({
        internship: internshipId,
        applicant: req.user._id
    });

    if (existingApplication) {
        throw new ApiError(400, "You have already applied for this internship");
    }

    const application = await Application.create({
        internship: internshipId,
        applicant: req.user._id,
        coverLetter: coverLetter || ""
    });

    return res.status(201).json(
        new ApiResponse(201, application, "Applied successfully! 🎉")
    );
});

// 2️⃣ Get My Applications (Student Dashboard)
const getMyApplications = asyncHandler(async (req, res) => {
    const applications = await Application.find({ applicant: req.user._id })
        .populate("internship")
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, applications, "Applications fetched successfully")
    );
});

// 🎯 EXPORT MUST BE HERE
export {
    applyForInternship,
    getMyApplications
};