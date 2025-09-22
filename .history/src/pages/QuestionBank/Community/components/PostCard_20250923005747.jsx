import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const PostCard = ({ post, onUpdate }) => {
  const [commentText, setCommentText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleLike = async () => {
    try {
      await axiosSecure.patch(`/api/posts/${post._id}/like`);
      onUpdate(); // refresh posts
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;
    try {
      await axiosSecure.patch(`/api/posts/${post._id}/comment`, {
        user: 'You', // replace with auth user
        text: commentText,
      });
      setCommentText('');
      setShowCommentInput(false);
      onUpdate(); // refresh posts
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img src={post.profilePic} alt="User" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h3 className="font-bold text-lg">{post.user}</h3>
          <p className="text-sm">{post.time}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4">{post.problem}</p>

      {/* Images */}
      {post.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {post.images.map((img, idx) => (
            <img key={idx} src={img} alt={`img-${idx}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <FaHeart className="text-red-500" />
          <span className="text-sm">{post.likes} Likes</span>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleLike} className="flex items-center space-x-1 hover:text-red-500">
            <FaHeart /> <span>Like</span>
          </button>
          <button
            onClick={() => setShowCommentInput((prev) => !prev)}
            className="flex items-center space-x-1 hover:text-emerald-500"
          >
            <FaComment /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <FaShareAlt /> <span>Share</span>
          </button>
        </div>
      </div>

      {/* Comment Section */}
      {post.comments.map((c, idx) => (
        <div key={idx} className="ml-12 mb-2 text-sm">
          <span className="font-semibold">{c.user}:</span> {c.text}
        </div>
      ))}

      {/* Comment Input */}
      {showCommentInput && (
        <div className="ml-12 flex mt-2">
          <input
            type="text"
            className="border rounded-l px-3 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="আপনার মন্তব্য লিখুন..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            onClick={handleComment}
            className="bg-emerald-500 px-4 py-1 rounded-r font-semibold hover:bg-emerald-600"
          >
            পোস্ট
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
