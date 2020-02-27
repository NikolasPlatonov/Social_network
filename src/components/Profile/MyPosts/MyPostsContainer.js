import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCriation,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  console.log('MY-POSTS-CONTAINER', props);
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = text => {
    let action = updateNewPostTextActionCriation(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.posts}
    />
  );
};

export default MyPostsContainer;
