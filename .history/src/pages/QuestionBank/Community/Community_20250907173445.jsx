import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareAlt, FaUsers } from 'react-icons/fa';
import PostData from './components/PostData';
import useCommunity from '../../../hooks/useCommunity';
import PostCard from './components/PostCard';

// Sample data for posts to demonstrate the functionality


const Community = () => {
  const [likes, setLikes] = useState({});
  const [posts, refetch] = useCommunity()

console.log(posts)
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
        <div key={post._id} className="bg-white rounded-xl shadow-lg p-6 mb-6">
<PostCard></PostCard>
        </div>
      ))}
    </div>
  );
};

export default Community;
