// This is the store.js file where the Redux store is configured

// configureStore - used to create the Redux store with the specified reducers and middleware
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/taskSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // categories: categoriesReducer,
    // users: usersReducer,
  }
})

export default store