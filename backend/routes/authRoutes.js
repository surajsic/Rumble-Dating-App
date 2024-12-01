import express from 'express';
import { signup } from '../controllers/authController.js';
import { login } from '../controllers/authController.js';
import { logout } from '../controllers/authController.js';
import { protectRoute } from "../middleware/auth.js";


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get("/me", protectRoute, (req, res) => {
	res.send({
		success: true,
		user: req.user,
	});
});

export default router