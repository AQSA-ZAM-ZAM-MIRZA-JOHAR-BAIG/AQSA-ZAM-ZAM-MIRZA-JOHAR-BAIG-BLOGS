const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostBySlug, updatePost, deletePost, toggleLikePost } = require('../controllers/postController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.route('/')
  .post(protect, authorize('Admin', 'Author'), createPost)
  .get(getPosts);

router.get('/:slug', getPostBySlug);

router.route('/:id')
  .put(protect, authorize('Admin', 'Author'), updatePost)
  .delete(protect, authorize('Admin', 'Author'), deletePost);

router.put('/:id/like', protect, toggleLikePost);

module.exports = router;
