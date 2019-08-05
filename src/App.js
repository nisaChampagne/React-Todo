import React from 'react';


// const todoData = [
//   {
//     task: 'Organize Garage',
//     id: 121,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 122,
//     completed: false
//   },
//   {
//     task: 'Organize Art Room',
//     id: 123,
//     completed: false
//   },
//   {
//     task: 'Meal Prep',
//     id: 124,
//     completed: false
//   },
//   {
//     task: 'Grocery Shop',
//     id: 125,
//     completed: false
//   },
//   {
//     task: 'Study JS',
//     id: 126,
//     completed: false
//   }
// ];

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      task: [],
      id: Date.now(),
      completed: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
