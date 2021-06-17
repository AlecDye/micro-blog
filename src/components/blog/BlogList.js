import Card from "./Card"

const BlogList = ({blogs}) => {
  // onClick for card display full blog post (blog.content)?
  return (
    <div className="blog-list">
      <h2>Blog list</h2>
      {
        blogs.map(blog => (
          <Card blog={blog}/>
        ))
      }
    </div>
  )
}

export default BlogList
