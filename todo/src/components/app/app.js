import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import "./app.css";

class App extends Component {
  
  maxId = 100;
  
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Aewsome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newTodoList = state.todoData.concat(newItem);

      return {
        todoData: newTodoList
      }
    })
  }

  onToggleDone = (id) => {
    this.setState((state) => {
      const todoDataNew = [...state.todoData];
      todoDataNew.forEach(item => {
        if(item.id === id) {
          item.done = !item.done
        }
      });
      return {
        todoData: todoDataNew
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      const todoDataNew = [...state.todoData];
      todoDataNew.forEach(item => {
        if(item.id === id) {
          item.important = !item.important
        }
      });
      return {
        todoData: todoDataNew
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
        <TodoList todos={todoData} onDeleted={this.deleteItem} toggleImportant={this.onToggleImportant} toggleDone={this.onToggleDone} />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    )
  }
  
};

export default App;