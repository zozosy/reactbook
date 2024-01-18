import React from 'react';

export default function BookList(props) {
    return (  
        <div>
        <ul>
         <li>{props.name[0]}</li>
         <li>{props.name[1]}</li>
         <li>{props.name[2]}</li>
         </ul> 
 
 
     </div>
)};