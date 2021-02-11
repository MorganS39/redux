// Create a Redux store
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);

// Get state from the Redux store
const store = Redux.createStore(
  (state = 5) => state
);
const currentState = store.getState();

// Define a Redux action