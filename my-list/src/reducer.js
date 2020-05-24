import { ADD } from './actionTypes';

const initialState = {
  messages: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
      case ADD:
        newState = newState.push(action.messages);
        break;
      default:
  }
  return newState;
}

export default reducer;
