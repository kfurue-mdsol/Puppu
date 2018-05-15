import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      uniqueId: 0,
    };

    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  resetTodo(){
    this.setState({
      tasks: [],
    });
  }

  addTodo(title){
    const{
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>Clear</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
