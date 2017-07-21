import React, { Component } from 'react';

class ToDoAppList extends Component {
  constructor() {
    super();
  }
  render() {
// This will be dynamic
		let items = this.props.tasks.map((elem, i) => {
			return <li key={i}>{elem}</li>
		});
    return(
			<ul>
				{items}
			</ul>
		);
  }
}
export default ToDoAppList;