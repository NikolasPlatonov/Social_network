import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hello, dude!', likesCount: 15 },
  { id: 2, message: 'Go to the ride today?', likesCount: 10 },
  { id: 3, message: 'Duuuuud! Whats up? )))))))', likesCount: 13 },
  { id: 4, message: 'Cool post, man!', likesCount: 20 },
  { id: 5, message: 'Come to my page in FB, pls! ', likesCount: 17 },
  { id: 6, message: 'There are many interesting ;-)', likesCount: 7 },
];

let dialogs = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Nick' },
  { id: 3, name: 'Sher' },
  { id: 4, name: 'Edik' },
  { id: 5, name: 'Robby' },
  { id: 6, name: 'Jack' },
];

let messages = [
  { id: 1, message: 'Hi, how are you?' },
  { id: 2, message: 'Did you hear new treks JZ?' },
  { id: 3, message: 'Duuuuud! Whats up? )))))))' },
  { id: 4, message: 'How is your training going?' },
  { id: 5, message: 'Come to my page in FB. There are many interesting ;-)' },
  { id: 6, message: 'Сool page, Bro! ))' },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
