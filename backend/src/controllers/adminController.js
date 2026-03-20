const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPosts = await Post.countDocuments();
    const totalComments = await Comment.countDocuments();

    // Calculate total views across all posts
    const viewsAggregation = await Post.aggregate([
      { $group: { _id: null, totalViews: { $sum: '$views' } } }
    ]);
    const totalViews = viewsAggregation.length > 0 ? viewsAggregation[0].totalViews : 0;

    const recentPosts = await Post.find().sort({ createdAt: -1 }).limit(5).select('title slug views likes status createdAt');
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).select('name email role createdAt');

    res.status(200).json({
      stats: { totalUsers, totalPosts, totalComments, totalViews },
      recentPosts,
      recentUsers
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      { role: req.body.role }, 
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
