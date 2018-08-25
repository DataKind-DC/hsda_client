import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from '../src/components/MainPage';
import configureStore from '../src/helpers/initStore'
import { Provider } from "react-redux";

var store = configureStore();
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
    );
  }
}

export default App;
