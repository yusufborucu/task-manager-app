import { useDispatch, useSelector } from "react-redux"
import { addTask, removeTask, updateTask, setTasks } from "../features/tasksSlice"

export const useTaskManager = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  const addNewTask = (title) => {
    const newTask = { id: Date.now().toString(), title }
    dispatch(addTask(newTask))
  }

  const deleteTask = (id) => {
    dispatch(removeTask(id))
  }

  const editTask = (id, newTitle) => {
    dispatch(updateTask({ id, data: { title: newTitle } }))
  }

  const updateTaskOrder = (newTasks) => {
    dispatch(setTasks(newTasks))
  }

  return { tasks, addNewTask, deleteTask, editTask, updateTaskOrder }
}
