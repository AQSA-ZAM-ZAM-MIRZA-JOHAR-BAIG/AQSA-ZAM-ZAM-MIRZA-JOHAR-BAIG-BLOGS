const express = require('express');
const router = express.Router();
const { getDashboardStats, getAllUsers, updateUserRole } = require('../controllers/adminController');
const { protect, authorize } = require('../middlewares/authMiddleware');

// All routes require Admin role
router.use(protect, authorize('Admin'));

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.put('/users/:id/role', updateUserRole);

module.exports = router;
