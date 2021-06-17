const BlogList = ({blogs}) => {
  return (
    <div className="blog-list">
      <h2>Blog list</h2>
      {
        blogs.map(blog => (
          <div className="blog-list__card">
            <h2>{blog.title}</h2>
            <p>Posted {blog.date}</p>
            <p>Written by: {blog.author}</p>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList
