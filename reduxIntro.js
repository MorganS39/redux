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
var action = {type: 'LOGIN'};

// Define an action creator
const action = {
  type: 'LOGIN'
}
function actionCreator() {
  return {action};
}

// Dispatch an action event
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
store.dispatch(loginAction());

// Handle an action in the store
