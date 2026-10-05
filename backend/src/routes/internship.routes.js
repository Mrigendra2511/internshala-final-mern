import { Router } from "express";
import {
    createInternship,
    getAllInternships,
    getInternshipById,
    deleteInternship
} from "../controllers/internship.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/").get(getAllInternships);
router.route("/:id").get(getInternshipById);

router.route("/").post(verifyJWT, createInternship);
router.route("/:id").delete(verifyJWT, deleteInternship);

export default router;