const comments = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {id: action.id, text: action.text, parentId: action.parentId, userName: action.userName, received: false}]
    case 'TOGGLE_RECEIVE':
      return state.map(comment => {
        if (comment.id !== action.id) {
          return comment
        }
        return Object.assign({}, comment, {received: !comment.received})
      })
    default:
      return state
  }
}

export default comments