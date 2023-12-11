
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'Eric' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'John' },
    { rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'Asha' },
    { rowNumber: 4, rowDescription: 'Take Dinner', rowAssigned: 'Rajeev' },
    { rowNumber: 5, rowDescription: 'Take Dinner', rowAssigned: 'Rishu' }
  ]

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "Old User"
      };
      todos.push(newTodo);
      console.log(todos);
    }
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
        </div>
      </div>

    </div>
  );
}

export default App;
