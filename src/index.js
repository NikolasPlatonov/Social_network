import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, subscribe } from './redux/state';
import { updateNewPostText } from './redux/state';
import state from './redux/state';

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
