import React, {useState} from 'react'

function Bookedit({ book }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('new title', title)
  }

  return (
     <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input type="text" className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>
        Save
      </button>
     </form>
     
  )
}

export default Bookedit