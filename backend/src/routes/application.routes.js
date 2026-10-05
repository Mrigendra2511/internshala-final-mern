import { Router } from "express";
import {
    applyForInternship,
    getMyApplications
} from "../controllers/application.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.use(verifyJWT);

router.route("/apply").post(applyForInternship);
router.route("/my-applications").get(getMyApplications);

export default router;