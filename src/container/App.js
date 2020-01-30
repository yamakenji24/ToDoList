import React, {Component} from 'react';

import TodoList from '../components/TodoList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { id:1, title:"tomorrow is the dead line", desc: "deadline", done: false},
        { id:2, title:"One Ok Rock live", desc: "deadline", done: false} 
      ]
    }
  }

  
  render() {
    return (
      <div classname="app">
        <h1>todo list</h1>
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}
