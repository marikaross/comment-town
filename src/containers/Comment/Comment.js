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
    <p className={className}>{props.text}</p>
  )
    

}
