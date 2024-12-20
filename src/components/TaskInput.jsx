import { useState } from "react"
import { useTaskManager } from "../hooks/useTaskManager"

const TaskInput = () => {
  const { addNewTask } = useTaskManager()
  const [taskTitle, setTaskTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskTitle.trim()) {
      addNewTask(taskTitle)
      setTaskTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskInput
