import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tasks: []
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    updateTask: (state, action) => {
      const { id, data } = action.payload
      const task = state.tasks.find((t) => t.id === id)
      if (task) Object.assign(task, data)
    },
    setTasks: (state, action) => {
      state.tasks = action.payload
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    }
  }
})

export const { addTask, updateTask, setTasks, removeTask } = tasksSlice.actions
export default tasksSlice.reducer
