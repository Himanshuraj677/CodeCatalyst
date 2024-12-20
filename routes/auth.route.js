import express from 'express';
import Login from '../controllers/auth/login.controller.js';
import Register from '../controllers/auth/register.controller.js';
import AuthMe from '../controllers/auth/authMe.controller.js';
import Verify from '../controllers/auth/verify.controller.js';
import ForgetPassword from '../controllers/auth/forget.controller.js';


const router = express.Router();

router.post('/login', Login);
router.post('/register', Register);
router.post('/verify-account', Verify);
router.post('/forget-password', ForgetPassword);
router.get('/check', AuthMe);

export default router;