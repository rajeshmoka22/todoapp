import React from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends React.Component {
  state={
      todoItems:[{
        deleted:false,
        id:0,
        todo:"Complete redux",
        completed:false
      },
      {
        deleted:false,
        id:1,
        todo:"Complete react",
        completed:false
      }
    ]
  }

  completeTodo= (id)=>{
    let todos=[...this.state.todoItems];
    todos[id].completed = true;
    this.setState({todoItems:todos})
  }
  deleteTodo = (id)=>{
    let todos=[...this.state.todoItems];
    todos[id].deleted = true;
    this.setState({todoItems:todos})
  }
  addTodo = (data)=>{
    let todos = [...this.state.todoItems];
    todos.push(data);
    this.setState({todoItems:todos});
  }

  render(){
    return (
      <div className="App">
        <h5 className="todo-heading">What are you planning today?</h5>
        <Todo todoItems={this.state.todoItems} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
