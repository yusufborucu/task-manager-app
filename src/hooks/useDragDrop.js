import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

export const useDragDrop = (tasks, setTasks) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return

    const reorderedTasks = Array.from(tasks)
    const [moved] = reorderedTasks.splice(result.source.index, 1)
    reorderedTasks.splice(result.destination.index, 0, moved)

    setTasks(reorderedTasks)
  }

  return { handleDragEnd, DragDropContext, Droppable, Draggable }
}
