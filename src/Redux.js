import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const intialstate = {
  loggedin: false,
  token: '',
  user: '',
};

function reducer(state = intialstate, action) {
  switch (action.type) {
    case 'logout':
      return state;
    case 'login':
      return {
        ...state,
        token: action.payload,
        user: 'admin',
        loggedin: true,
      };
    case 'setusername':
      return { ...state, user: action.payload };
    case 'signup':
      return state;
    case 'create-todo':
      return state;
    case 'delete-todo':
      return state;
    case 'update-todo':
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);
function Redux() {
  return (
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  );
}
export default Redux;
