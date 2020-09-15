import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    item: ''
  }
  
  onLabelChange = (e) => {
    console.log(e.target.value);

    this.setState({
      item: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.item);
  }


  render() {
    
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What does need to be done?"
        />
        <button 
          type="submit" 
          className="btn btn-outline-secondary" 
        >
          Add task
        </button>
      </form>
      
    )
  }
}