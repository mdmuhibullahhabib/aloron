import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';

// Sample data for posts to demonstrate the functionality
const initialPosts = [
  {
    id: 1,
    user: 'Anu',
    profilePic: 'https://placehold.co/40x40/cccccc/ffffff?text=Anu',
    time: '2 hours ago',
    problem: 'Kew MCQ gulor answer dite parba?',
    images: [
      'https://placehold.co/400x500/e2e8f0/64748b?text=Image+1',
      'https://placehold.co/400x500/e2e8f0/64748b?text=Image+2',
    ],
    likes: 5,
    comments: 2,
  },
  {
    id: 2,
    user: 'John Doe',
    profilePic: 'https://placehold.co/40x40/bada55/ffffff?text=JD',
    time: '4 hours ago',
    problem: 'Can anyone help me with this Python problem? It keeps giving me a syntax error.',
    images: [],
    likes: 12,
    comments: 5,
  },
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [likes, setLikes] = useState({});

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

  const handleLike = (postId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen font-sans bg-gray-100 text-gray-800">

      {/* --- Sidebar (replicated for visual context) --- */}
      <aside className="hidden lg:flex flex-col w-64 bg-white p-6 shadow-md rounded-r-lg">
        <div className="flex items-center mb-10">
          <span className="text-xl font-bold">QuestionBank</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <span className="text-lg">হ্মক পরীক্ষা</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-50 text-emerald-600 transition-colors duration-200">
                <span className="text-lg">কমিউনিটি</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <span className="text-lg">আর্কাইভ</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg">
            Sign Up
          </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Post Creation Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
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
      </main>
    </div>
  );
};

export default Community;
