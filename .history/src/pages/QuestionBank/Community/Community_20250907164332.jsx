import React, { useState } from "react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import PostData from "./PostForm";

// Sample initial data
const initialPosts = [
  {
    id: 1,
    user: "Anu",
    profilePic: "https://placehold.co/40x40/cccccc/ffffff?text=Anu",
    time: "2 hours ago",
    problem: "Kew MCQ gulor answer dite parba?",
    images: [
      "https://placehold.co/400x500/e2e8f0/64748b?text=Image+1",
      "https://placehold.co/400x500/e2e8f0/64748b?text=Image+2",
    ],
    likes: 5,
    comments: [
      { user: "John", text: "Try solving by formula!" },
      { user: "Lisa", text: "Check chapter 2." },
    ],
  },
  {
    id: 2,
    user: "John Doe",
    profilePic: "https://placehold.co/40x40/bada55/ffffff?text=JD",
    time: "4 hours ago",
    problem:
      "Can anyone help me with this Python problem? It keeps giving me a syntax error.",
    images: [],
    likes: 12,
    comments: [],
  },
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);

  // Handle adding new post
  const addPost = (newPost) => {
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPostObject = {
      id: newId,
      user: "You",
      profilePic: "https://placehold.co/40x40/ffcc00/ffffff?text=You",
      time: "Just now",
      problem: newPost,
      images: [],
      likes: 0,
      comments: [],
    };
    setPosts([newPostObject, ...posts]);
  };

  // Handle like toggle
  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  // Handle adding comment
  const addComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { user: "You", text: commentText },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Post Form */}
      <PostForm onPost={addPost} />

      {/* Posts Feed */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          {/* Post Header */}
          <div className="flex items-center mb-4">
            <img
              src={post.profilePic}
              alt={post.user}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">{post.user}</h3>
              <p className="text-gray-500 text-sm">{post.time}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-gray-800 mb-4">{post.problem}</p>

          {/* Images */}
          {post.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {post.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Post image ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mb-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-500" />
              <span>{post.likes} Likes</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => toggleLike(post.id)}
                className="flex items-center space-x-1 hover:text-red-500"
              >
                <FaHeart /> <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-emerald-500">
                <FaComment /> <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <FaShareAlt /> <span>Share</span>
              </button>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-2">
            {post.comments.map((comment, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2 mb-2"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                  {comment.user[0]}
                </div>
                <p className="bg-gray-100 rounded-xl px-3 py-2 text-gray-800">
                  <span className="font-semibold">{comment.user}: </span>
                  {comment.text}
                </p>
              </div>
            ))}
            {/* Add comment input */}
            <AddComment postId={post.id} onAddComment={addComment} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Comment Input Component
const AddComment = ({ postId, onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(postId, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="আপনার মন্তব্য লিখুন..."
        className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white px-4 rounded-r-lg hover:bg-emerald-600 transition-colors"
      >
        Post
      </button>
    </form>
  );
};

export default Community;
