import logo from './logo.svg';
import Login from './screens/login/Login';
import Notes from './screens/notes/Notes';
import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import LoginReducer from '../src/store/reducers/login/LoginReducer';
import NotesReducer from '../src/store/reducers/notes/notesReducer';
import './App.css';
import '../src/shared/styles/main.css'; // './App.css';

const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    NotesReducer: NotesReducer
});

const store = createStore(rootReducer);



function App() {
    return (
        <Provider store={store}>
      <div >
          <Router>
              <Header />              
              <Switch>
                  <Route path="/" exact component={Login}></Route>
                  <Route path="/Notes" component={Notes}></Route>
                  {/* <Route path="/merchant/:mid/:lid" component={ShopProfile}></Route> */}
              </Switch>
                    {/* <Footer /> */}
          </Router>

          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

            </div>
        </Provider>
  );
}

export default App;
