import React from 'react';
import ReactDOM from 'react-dom';

// import configureStore from './store/store'
// import Root from './components/root';
// import { login, signup, logout } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
    // store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }

// TESTING START
ReactDOM.render(<h1>entry file</h1>, root);
// const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login
  // window.logout = logout
  // window.fetchProject = fetchProject;
  // window.fetchProjects = fetchProjects;
  // window.fetchCategory = fetchCategory;
//TESTING END

  // ReactDOM.render(<Root store={store} />, root);
})
