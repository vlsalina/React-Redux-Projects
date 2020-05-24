import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';

const initialState = {
  results: [] 
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign([],state); 
  let ans = 0;

  switch(action.type) {
    case ADD:
      ans = parseInt(action.item1) + parseInt(action.item2);
      newState.results.push({type: ADD, answer: ans});
      break;
    case SUBTRACT:
      ans = parseInt(action.item1) - parseInt(action.item2);
      newState.results.push({type: SUBTRACT, answer: ans});
      break;
    case MULTIPLY:
      ans = parseInt(action.item1) * parseInt(action.item2);
      newState.results.push({type: MULTIPLY, answer: ans});
      break;
    case DIVIDE:
      ans = parseInt(action.item1) / parseInt(action.item2);
      newState.results.push({type: DIVIDE, answer: ans});
      break;
    default:
  }

  return newState;

}

export default reducer;
