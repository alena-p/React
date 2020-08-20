import React, {Component} from 'react';

import TodoListItem from '../todo-list-item'
import "./todo-list.css";

export default class TodoList extends Component { 

  state = {
    todos: this.props.todos
  }

  render() {
    const { todos } = this.state;
    const {onDeleted, toggleImportant} = this.props;
  

    return (
      <ul className="list-group todo-list">
        {todos.map((item) => {
          const {id, ...itemProps} = item;
          return (
            <li key={id} className="list-group-item">
              <TodoListItem 
                {...itemProps}
                onDeleted={() => {onDeleted(id)}} 
                toggleImportant={() => {toggleImportant(id)}}/>
            </li>
          )
        })}
      </ul>
    )

  }
}

