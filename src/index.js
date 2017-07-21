/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AddNewTask from './AddNewTask';
import ToDoAppList from './appList';


require('!style-loader!css-loader!sass-loader!./index.scss');

const styles = {
  textAlign: 'center'
};

const tasksList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tasks: this.props.tasks
    };

    this.updateList = this.updateList.bind(this);
  }

  updateList(text) {
    let updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
  }

  render() {
    // let toDoList = this.state.toDoList;
    return (
      <div>
        <h1 style={styles}>{'\u2728'}CheckList{'\u2728'}</h1>
        <h2>Enter Tasks to see some magic happen {'\u2728'}</h2>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks}/>
        {/* <div>{this.state.toDoList}</div> */}
      </div>
    )
  }
}
// tasks={tasksList}
ReactDom.render(<App tasks={tasksList}/>, document.getElementById('root'));