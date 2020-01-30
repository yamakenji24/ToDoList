import React, {Component} from 'react';
import _ from 'lodash';

export default class TodoList extends Component {

  showTodoList() {
    return _.map(this.props.todo, (value, key, objet) => (
      <div key={value.id}>
        <h2>{value.desc}</h2>
        <p>{value.title}</p>
      </div>
    ))
  }
  
  render() {
    const showlist = this.showTodoList();
    return (
      <div>
        {showlist}
      </div>
    );
  }
}
