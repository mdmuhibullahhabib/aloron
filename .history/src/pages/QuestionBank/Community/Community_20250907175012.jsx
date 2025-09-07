import React, { useState } from 'react';
import PostData from './components/PostForm';
import useCommunity from '../../../hooks/useCommunity';
import PostCard from './components/PostCard';

// Sample data for posts to demonstrate the functionality


const Community = () => {
  const [posts, refetch] = useCommunity()

  console.log(posts)


  return (
    <div className="max-w-3xl mx-auto">
      {/* Post Creation Section */}
      <PostData></PostData>


      {/* Posts Feed */}
      {posts.map((post) => (
        <div key={post._id} className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <PostCard 
          key={post._id} 
          post={post}
          ></PostCard>
        </div>
      ))}
    </div>
  );
};

export default Community;
