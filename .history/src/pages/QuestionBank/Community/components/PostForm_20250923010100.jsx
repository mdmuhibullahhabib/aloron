import React, { useState } from 'react'

const PostForm = () => {
      const [newPost, setNewPost] = useState('');
    

      const handlePost = () => {
        if (newPost.trim() === '') return;
    
        const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
        const newPostObject = {
          id: newId,
          user: 'You', // This would be the authenticated user's name
          profilePic: 'https://placehold.co/40x40/ffcc00/ffffff?text=You',
          time: 'Just now',
          problem: newPost,
          images: [],
          likes: 0,
          comments: 0,
        };
    
        setPosts([newPostObject, ...posts]);
        setNewPost('');
      };

  return (
          <div className=" rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">আপনার সমস্যা পোস্ট করুন</h2>
        <textarea
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-4"
          rows="4"
          placeholder="আপনার প্রশ্ন, সমস্যা বা ভাবনা এখানে লিখুন..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          onClick={handlePost}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          পোস্ট করুন
        </button>
      </div>
  )
}

export default PostForm