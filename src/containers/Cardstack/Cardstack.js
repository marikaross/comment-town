import React, { Component } from 'react';
// import { courseCard } from '../../components/courseCard/courseCard';
import { connect } from 'react-redux';
import './Cardstack.css';

export class Cardstack extends Component {



  render() {
    return (
      <div className='card-stack'>
        <article className='card-1 course-card'>I am a course card</article>
        <article className='card-2 course-card'>I am also course card</article>
        <article className='card-3 course-card'>Me too</article>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  cards: state.cards,
  comments: state.comments
});

export const mapDispatchToProps = (dispatch) => {
  // addComment = (addComment) => dispatch(addComment(text, id, parentId, userName)) 
}


export default connect(mapStateToProps, mapDispatchToProps)(Cardstack);