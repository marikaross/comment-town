import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import { connect } from 'react-redux';
import './Cardstack.css';

export class Cardstack extends Component {
  
  
  render() {
    const mockData = {
      id: 'cardstack1',
      title: 'PARALLELOGRAM',
      card: [{title: 'Objective', id: 1}],
      comments: [
        {cardId: 1, text: 'I love this card', id: 1, parentId: null},
        {cardId: null, text: 'I love this pizza', id: 2, parentId: null},
        {cardId: null, text: 'Hooray', id: 3, parentId: 2},
        {cardId: null, text: 'jump',  id: 4, parentId: 2},
        {cardId: null, text: 'humano', id: 5, parentId: null},
        {cardId: null, text: 'blue', id: 6, parentId: 5},
        {cardId: null, text: 'sweater',  id: 7, parentId: 5},
        ],
    }

  
    const comments = mockData.comments.map(dataSet => {
      return (
        <Comment className='comment-box'
          {...dataSet}
          />
        )
    })

    return (

      <div className='card-stack'>
        <h1>{mockData.title}</h1>
        {comments}
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