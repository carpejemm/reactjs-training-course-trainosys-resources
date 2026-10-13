import { useReducer, useState } from 'react'

const initialState = [
  {
    id: 1,
    task: 'Learn React Hooks',
    completed: false
  },
  {
    id: 2,
    task: 'Learn Redux',
    completed: false
  },
  {
    id: 3,
    task: 'Learn React Data',
    completed: true
  }
]

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: state.length + 1,
        task: action.payload,
        completed: false
      }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    case 'TOGGLE_TODO': 
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}


// small to do app using useReducer Hook
const UseReducerComponent = () => {
  const [newTodo, setNewTodo] = useState('')

  const [todoList, dispatch] = useReducer(reducerFunction, initialState)
  // todoList - this is our initial state managed by the reducer function
  // dispatch - this is a function that sends actions to the reducer function to update the state
  // useReducer - this is a React hook that manages complex state logic in a component
  // reducerFunction - reducerFunction - this function receives the current state and an action, and returns the new state based on the action type
  // initialState - this is the initial state of the todo list managed by the reducer function


  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    // dispatch - is a function that used to send the data/action to the reducer function
    dispatch({ type: 'ADD_TODO', payload: newTodo})
    setNewTodo('')
  }

  const handleDeleteTask = id => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  const handleToggleTask = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }
  
  return (
    <div className="use-reducer-component">
      <h2>Use Reducer Component</h2>
      <h2>Todo List</h2>
      <ul>
        {todoList.map(todo => (
          <>
            <li key={todo.id} className={todo.completed ? 'completed' : 'incomplete'}>
              {todo.task} - {todo.completed ? 'Completed' : 'Incomplete'}
              <button onClick={() => handleToggleTask(todo.id)} className={todo.completed ? 'displayNone' : 'notDisplayNone'}>
                Toggle
              </button>
              <button onClick={() => handleDeleteTask(todo.id)}  className={todo.completed ? 'displayNone' : 'notDisplayNone'}>
                🗑️
              </button>
            </li>
            
          </>
        ))}
      </ul>

      { todoList.length === 0 ? <p>No tasks available</p> : null }

      {/* Create a new todo item here. */}
      <input
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />  
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default UseReducerComponent