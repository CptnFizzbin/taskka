import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddTask from './add-task';
import Task from './task';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

class TaskList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task) => (
            <Task key={task.id} task={task}/>
          ))}
          <li><AddTask /></li>
        </ul>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(TaskList)
