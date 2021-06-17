const Card = (props) => {
  const {title, author, date, preview} = props.blog;

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{date}</p>
      <p>{preview}</p>
    </div>
  )
}

export default Card

