import React from 'react';

export default function BookList(props) {
    const handleRemove = (id) => {
       

        props.onRemove(id);
        };

    return (
      <div>
         <ol>
         {props.name.map((book)=> (
              <li key={book.id}>
                {book.name}
                 <button onClick={() => handleRemove(book.id)}> &#10060; </button> </li>
              

          ))}
          </ol> 
              
      </div>
    )
  }