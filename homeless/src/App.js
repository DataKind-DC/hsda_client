import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MainPage from '../src/components/MainPage';
import SimpleForm from '../src/components/simpleForm';
import configureStore from '../src/helpers/initStore'
import { Provider } from "react-redux";

let store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <MainPage/>*/}
        <SimpleForm/>
      </Provider>
    );
  }
}

export default App;
