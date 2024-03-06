import React, { useState } from 'react';


export default function Addbookform(props) {

  const [title, setTitle] = useState("");

  const handleSubmit = (event)=> {
      setTitle(event.target.value);
  }
  const handleAdd = (event) => {

      event.preventDefault();
      if (title.trim() === '') {
        // Prevent adding empty books...
          return;
        }

      props.form(title);
      setTitle('')
  }
return (
  <div> 
   <form onSubmit={handleAdd}>
   <input type= "text" value= {title} onChange={handleSubmit}/>
   <button>Add</button>
   </form>
  </div>
)
}