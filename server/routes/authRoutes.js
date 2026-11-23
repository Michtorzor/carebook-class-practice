import { Router } from "express";
import { register, login, forgotPassword, resetPassword, getMe } from "../controllers/authController.js";

const router = Router();

// specify the authentication and authorization routes
router.post("/register", register);
router.post("/login", login);
router.get("/me", getMe);
router.post("/forgetPassword",forgotPassword);
router.post("/resetPassword", resetPassword);

export default router;