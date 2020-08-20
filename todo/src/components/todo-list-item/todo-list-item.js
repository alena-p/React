import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  };
  

  render() {
    const { label, onDeleted, toggleImportant, important } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';

    if(done) {
      classNames = `${classNames} done`
    }

    if(important) {
      classNames = `${classNames} important`
    }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={toggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}
                >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

