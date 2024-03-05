import React from 'react';

export default function BookList(props) {
    const handleRemove = (index) => {
        const removeList = [...props.name];
        removeList.splice(index, 1);
        props.onRemove(removeList);
        };
    return (
      <div>
         <ol>
         {props.name.map((book, i)=> (
              <li key={i}>
                {book} <button onClick={() => handleRemove(i)}> &#10060; </button> </li>
              

          ))}
          </ol> 
              
      </div>
    )
  }