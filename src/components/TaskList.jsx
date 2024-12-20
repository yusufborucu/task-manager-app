import { useState } from "react"
import { useDragDrop } from "../hooks/useDragDrop"
import { useTaskManager } from "../hooks/useTaskManager"

const TaskList = () => {
  const { tasks, deleteTask, editTask, updateTaskOrder } = useTaskManager()
  const { handleDragEnd, DragDropContext, Droppable, Draggable } = useDragDrop(tasks, updateTaskOrder)

  const [editMode, setEditMode] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (id, title) => {
    setEditMode(id)
    setEditText(title)
  }

  const handleSave = (id) => {
    editTask(id, editText)
    setEditMode(null)
    setEditText("")
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      ...provided.draggableProps.style,
                      padding: "10px",
                      margin: "5px 0",
                      background: "#f0f0f0",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {editMode === task.id ? (
                      <>
                        <input
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          style={{ flex: 1, marginRight: "10px" }}
                        />
                        <button
                          onClick={() => handleSave(task.id)}
                          style={{
                            background: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 10px",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <span style={{ flex: 1 }}>{task.title}</span>
                        <button
                          onClick={() => handleEdit(task.id, task.title)}
                          style={{
                            background: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 10px",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskList
