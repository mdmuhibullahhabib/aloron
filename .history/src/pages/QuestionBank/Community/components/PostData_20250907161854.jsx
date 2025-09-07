import React from 'react'

const PostData = () => {
  return (
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
  )
}

export default PostData