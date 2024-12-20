import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./features/tasksSlice"
import App from "./App"

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
