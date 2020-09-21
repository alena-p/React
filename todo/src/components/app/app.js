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
      id: this.maxId++,
      hidden: false
    }
  }

  toggleProperty(arr, id, propName) {
    const newArr = [...arr];
    newArr.forEach(item => {
      if(item.id === id) {
        item[propName] = !item[propName]
      }
    });

    return newArr;
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

    if(text) {
      const newItem = this.createTodoItem(text);

      this.setState((state) => {
        const newTodoList = state.todoData.concat(newItem);

        return {
          todoData: newTodoList
        }
      })
    }
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      }
    })
  }

  filter = (action) => {
    this.setState(({todoData}) => {
      let filteredTodoData = todoData.map((item) => {
        switch (action) {
          case "done":
            if (item["done"] === false) {
              item["hidden"] = true;
            } else item["hidden"] = false;
            break;
          case "active":
            if(item["done"] === true) {
              item["hidden"] = true
            } else item["hidden"] = false;
            break; 
          case "all":
            item["hidden"] = false;
            break;  
        };
        return item;
      })
      return {
        todoData: filteredTodoData
      }
    })
  }

  render() {
    
    const { todoData } = this.state;
    const done = todoData.filter((item) => {return item.done}).length;
    const toDo = todoData.length - done;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter filter={this.filter} />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteItem} toggleImportant={this.onToggleImportant} toggleDone={this.onToggleDone} />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    )
  }
  
};

export default App;