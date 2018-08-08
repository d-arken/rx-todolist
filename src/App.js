import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import TodoListApp from './components/TodoListApp'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is a <code>Todos</code> challenge.
        </p>


        <div className='Todos'>
          <Provider store={store}>
            <TodoListApp />
          </Provider>

        </div>
      </div>
    );
  }
}

export default App;
