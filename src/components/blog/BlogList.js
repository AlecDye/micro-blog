import Card from "./Card"

const BlogList = ({blogs}) => {
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
