import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";


const todoData = [
  {
    task: "Go grocery shopping",
    id: 123,
    completed: false
  },
  {
    task: "Walk Bear",
    id: 124,
    completed: false
  },
  {
    task: "Meal Prep",
    id: 1235,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData 
    };

  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = task => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = () => {
    console.log('deleted');
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Heres what I should be doing.</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;