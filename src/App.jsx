import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
