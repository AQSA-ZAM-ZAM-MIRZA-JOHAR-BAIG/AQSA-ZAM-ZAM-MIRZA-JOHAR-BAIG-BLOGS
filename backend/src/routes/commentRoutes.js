const express = require('express');
const router = express.Router();
const { addComment, getCommentsByPost, deleteComment } = require('../controllers/commentController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/')
  .post(protect, addComment);

router.get('/post/:postId', getCommentsByPost);

router.delete('/:id', protect, deleteComment);

module.exports = router;
