import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import "./app.css";

class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Aewsome App', important: true, id: 2},
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

  addItem = (text, isImportant) => {
    const id = this.state.todoData.length ? Math.max.apply(null, this.state.todoData.map(item => {
      return item.id
    })) + 1 : 1;

    const newItem = {label: text, important: isImportant, id: id };

    this.setState((state) => {
      const newTodoList = state.todoData.concat(newItem);

      return {
        todoData: newTodoList
      }
    })
  }

  onToggleDone = (id) => {

  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      state.todoData.forEach(item => {
        if(item.id === id) {
          item.important = !item.important
        }
      });
      return {
        todoData: state.todoData
      }
    })
    console.log(`toggle important of ${id}`)
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
        <TodoList todos={todoData} onDeleted={this.deleteItem} toggleImportant={this.onToggleImportant} />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    )
  }
  
};

export default App;