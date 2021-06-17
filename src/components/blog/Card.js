const Card = (props) => {
  const {title, author, date, content} = props.blog;

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  )
}

export default Card

