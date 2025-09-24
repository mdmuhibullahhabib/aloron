import React from 'react'
import useBlog from '../../../hooks/useBlog'

const ManageBlogs = () => {
    const [blogs] = useBlog()
  return (
    <div>ManageBlogs</div>
  )
}

export default ManageBlogs