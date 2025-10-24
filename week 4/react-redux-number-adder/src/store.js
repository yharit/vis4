import { createStore } from 'redux';

// Initial state - holds the application's data, including a count and a history of actions
const initialState = {
  history: [],
  count: 0
};

// Reducer function to handle actions and update the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'UPDATE_HISTORY':
      console.log('UPDATE_HISTORY', state, action.payload);
      return {
        ...state,
        history: [
          ...state.history.slice(0, action.payload),
          ...state.history.slice(action.payload + 1)
        ]
      };

         case 'BUTTON_PRESSED':
      console.log('BUTTON_PRESSED', state, action.payload);
      return {
        ...state,
        history: [...state.history, action.payload],
        count: state.count + action.payload
      };



 
case 'CLEAR_ALL':
      console.log('CLEAR_ALL', state);
      return {
        ...state,
        history: [],
        count: [0]
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;