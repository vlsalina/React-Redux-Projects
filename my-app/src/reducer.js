import { ADD, SUBTRACT } from './actionTypes';

const initialState = {
  age: 20
};

const reducer = (state=initialState, action) => {
    const newState = Object.assign({}, state);

    switch(action.type) {
        case ADD:
            newState.age+=1;
            break;
        case SUBTRACT:
            newState.age-=1;
            break;
        default:
    }
    return newState;

};

export default reducer;