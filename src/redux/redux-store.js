import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sitebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  // reducers element should look like my _state(obj)
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
