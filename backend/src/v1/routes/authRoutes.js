const express = require('express');
const authController = require('../../controllers/authController');
const { protect } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/', authController.register);
router.post('/login', authController.login);
router.get('/me', protect, authController.getMe);

module.exports = router;
