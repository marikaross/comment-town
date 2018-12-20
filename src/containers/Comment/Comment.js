import React from 'react';
import './Comment.css';

export default (props) => {
  let className 
  
  if (props.parentId) {
    className = "depth-1"
  } else {
    className = "depth-0"
  }

  return (
      <div className={className}>
        <p>{props.text}</p>
        <button>comment</button>
      </div>
    )
  

}

//where should lesson comments go? top? bottom?
//should depth-1 comments have comment button? or just card?
//
