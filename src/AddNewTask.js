import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewTask extends Component {
  constructor(props) {
    super(props);
    this.justSubmitted = this.justSubmitted.bind(this);
  // Prevents page from reloading
  }
  justSubmitted(event) {
    // prevent page from reloading
    event.preventDefault();
    // Query reaches to input type='text'
    let input = event.target.querySelector('input');
    let value = input.value;
    // just a reset field to know its been added
    input.value = '';
    this.props.updateList(value);
  }
  render() {
    return (
      <div className="toDoList">
        <div className="header">
          <form onSubmit={this.justSubmitted}>
            <input 
              type="text" 
              placeholder="type your tasks here. . ." />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewTask;
