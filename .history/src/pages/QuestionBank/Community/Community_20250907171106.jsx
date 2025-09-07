import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareAlt, FaUsers } from 'react-icons/fa';
import PostData from './components/PostData';

// Sample data for posts to demonstrate the functionality


const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [likes, setLikes] = useState({});
  const posts



  const handleLike = (postId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Post Creation Section */}
      <PostData></PostData>


      {/* Posts Feed */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {/* Post Header */}
          <div className="flex items-center mb-4">
            <img
              src={post.profilePic}
              alt="User Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">{post.user}</h3>
              <p className="text-gray-500 text-sm">{post.time}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-gray-800 mb-4">{post.problem}</p>

          {/* Images in a grid if they exist */}
          {post.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Document page ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          )}

          {/* Post Actions */}
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-500" />
              <span className="text-sm">{likes[post.id] || post.likes} Likes</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200"
              >
                <FaHeart className="text-xl" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-emerald-500 transition-colors duration-200">
                <FaComment className="text-xl" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                <FaShareAlt className="text-xl" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community;
