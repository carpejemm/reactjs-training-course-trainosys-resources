import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  // const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('')
  const [editTaskTitle, setEditTaskTitle] = useState('')
  const [editTaskId, setEditTaskId] = useState(null)

  console.log(editTaskId)

  const handleAddTask = () => {
    if (newTask.trim() === '') return

    dispatch({ 
      type: 'tasks/addTask', 
      payload: {
        id: uuidv4(),
        title: newTask,
        completed: false
      }
    })
    setNewTask('')
  }
  
  const handleDeleteTask = id => {
    dispatch({
      type: 'tasks/deleteTask',
      payload: id
    })
  }

  const handleEditTask = (id, newTitle) => {
    if (newTitle.trim() === '') return

    dispatch({
      type: 'tasks/editTask',
      payload: {
        id: id,
        title: newTitle
      }
    })
  } 
  
  const handleToggleEditTask = id => {
    if (editTaskId === id) {
      handleEditTask(id, editTaskTitle)
      setEditTaskId(null)
      setEditTaskTitle('')
    } else {
      setEditTaskId(id)
      setEditTaskTitle(tasks.find(task => task.id === id).title)
    }
  }
  
  
  return (
    <>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {
          tasks.map(task => (
            <>
              <li 
                key={task.id}>
                  {task.title} {task.completed ? "(Completed)" : "(Pending)"}
                  {/* Edit the task */}
                  {
                    editTaskId === task.id && (
                      <input 
                        type="text"
                        placeholder="Edit Task"
                        value={editTaskTitle}
                        onChange={(e) => setEditTaskTitle(e.target.value)}
                      />
                    )
                  }
                  <button onClick={() => handleToggleEditTask(task.id)}>
                    {editTaskId === task.id ? "💾" : "📝"}
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)}>🗑️</button>
              </li>
              
            </>
          ))
        }
      </ul>

      {tasks.length === 0 && <p>No tasks available</p>}
    </>
  )
}

export default TaskList