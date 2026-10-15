import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Sample Task',
    completed: false
  },
  {
    id: 2,
    title: 'Learn Redux',
    completed: false
  },
  {
    id: 3,
    title: 'Buy some milk',
    completed: true
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    },
    editTask: (state, action) => {
      const { id, title } = action.payload
      const existingTask = state.find(task => task.id === id)
      if (existingTask) {
        existingTask.title = title
      }
    }
  }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer

