import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import "./app.css";

class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Aewsome App', important: false, id: 2},
      {label: 'Have a lunch', important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState((state) => {
      return {
        todoData: state.todoData.filter((item) => {
          return item.id !== id;
        })
      }
    })
  }

  render() {
    
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={4} done={5} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteItem} />
      </div>
    )
  }
  
};

export default App;