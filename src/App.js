import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sitebar={props.state.sitebar} />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                posts={props.state.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText}
              />
            )}
          />
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            )}
          />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
