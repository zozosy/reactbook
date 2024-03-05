import React, { useState } from 'react';


export default function Addbookform(props) {
  const [title, setTitle] = useState("");
  const handleSubmit = (event)=> {
      setTitle(event.target.value);
  }
  const handleadd = (event) => {
      event.preventDefault();
      props.addbook(title);
      setTitle("")
  }
return (
  <div> 
   <form onSubmit={handleadd}>
   <input type= "text" value= {title} onChange={handleSubmit}/>
   <button>Add</button>
   </form>
  </div>
)
}