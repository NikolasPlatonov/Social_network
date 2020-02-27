import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sitebar-reducer';

let reducers = combineReducers({
  // reducers element should look like my _state(obj)
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
