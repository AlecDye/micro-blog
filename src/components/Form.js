const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="">Post Title</label>
        <input 
          type="text" 
          placeholder="A really cool story"
          required
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Tags</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Post Content</label>
        <textarea 
          placeholder="What a cool story!"
          
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="">Author</label>
        <select 
          name="" 
          id=""

        >
            <option value="Alec">Alec</option>
            <option value="Conner">Conner</option>
            <option value="Guest">Guest</option>
        </select>
      </div>
      
    </form>
  )
}

export default Form
