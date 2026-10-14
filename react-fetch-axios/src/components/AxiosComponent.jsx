import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com"

const AxiosComponent = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        // since todos is a total of 200 items, how can we fetch the first 20 items?
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`)
        console.log(response.data)
        setTodos(response.data)
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }

    fetchUsers()

  }, [])

  const handleAddNewTodo = async () => {
    if (newTodo.trim() === '') return

    const newTodoObject = {
      userId: 1,
      title: newTodo,
      completed: false
    }

    try {
      const response = await axios.post(`${BASE_URL}/todos`, newTodoObject)
      setTodos(prevTodos => [...prevTodos, response.data])
      setNewTodo('')

    } catch (error) {
      console.error("Error adding new todo:", error)
    }
  }



  return (
    <>
      <div className="axios-component">
        <h2>Axios Component</h2>
        {/* Add a Form to add new todo */}
        <input
          type="text"
          placeholder="Enter new todo item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="button" onClick={handleAddNewTodo}>Add Todo</button>
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default AxiosComponent