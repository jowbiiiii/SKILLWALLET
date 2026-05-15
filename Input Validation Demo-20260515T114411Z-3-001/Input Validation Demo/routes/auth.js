/**
 * Auth Routes
 * POST /register - Register a new user (with validation)
 */

const express = require('express');
const router = express.Router();
const validateRegister = require('../middleware/validateRegister');
const authController = require('../controllers/authController');

// POST /api/auth/register
// Applies validation middleware before reaching the controller
router.post('/register', validateRegister, authController.registerUser);

module.exports = router;
