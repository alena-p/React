import React, {Component} from 'react';

import TodoListItem from '../todo-list-item'
import "./todo-list.css";

export default class TodoList extends Component { 

  render() {
    const {todos, onDeleted, toggleImportant, toggleDone} = this.props;
  

    return (
      <ul className="list-group todo-list">
        {todos.map((item) => {
          const {id, ...itemProps} = item;
          return (
            <li key={id} className="list-group-item">
              <TodoListItem 
                {...itemProps}
                onDeleted={() => {onDeleted(id)}} 
                toggleImportant={() => {toggleImportant(id)}}
                toggleDone={() => {toggleDone(id)}}/>
            </li>
          )
        })}
      </ul>
    )

  }
}

