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

    case 'RESET':
      console.log('RESET', state);
      return {
        ...state,
        history: [...state.history, 'RESET'],
        count: 0
      };

    case 'ADD_1':
      console.log('ADD_1', state);
      return {
        ...state,
        history: [...state.history, 1],
        count: state.count + 1
      };

    case 'ADD_2':
      console.log('ADD_2', state);
      return {
        ...state,
        history: [...state.history, 2],
        count: state.count + 2
      };

    case 'REMOVE_1':
      console.log('REMOVE_1', state);
      return {
        ...state,
        history: [...state.history, -1],
        count: state.count - 1
      };

    case 'REMOVE_2':
      console.log('REMOVE_2', state);
      return {
        ...state,
        history: [...state.history, -2],
        count: state.count - 2
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