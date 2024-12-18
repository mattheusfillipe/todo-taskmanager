import "./index.css"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import { Input } from "./Input"
import { Header } from "./Header"
import { ListHeader } from "./ListHeader"
import { TaskList } from "./TaskList"

export function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])

  const [completedTasks, setCompletedTasks] = useState(0)

  function addTask() {
    if (task.trim()) {
      // Cria um objeto de tarefa com ID único
      const newTask = {
        id: uuidv4(), // Gera um ID único
        text: task,
      }

      setTaskList([...taskList, newTask])
      setTask("")
    }
  }

  function handleRemoveTask(taskIdToRemove) {
    // Cria uma nova lista sem o item que queremos remover
    const updatedTaskList = taskList.filter(
      (task) => task.id !== taskIdToRemove
    )

    setTaskList(updatedTaskList)
  }

  return (
    <div className="flex flex-col mx-auto">
      <Header />
      <Input task={task} setTask={setTask} addTask={addTask} />
      <ListHeader taskList={taskList} completedTasks={completedTasks} />

      {/* Task List Items */}
      <TaskList
        taskList={taskList}
        onCompletedTasksChange={setCompletedTasks}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  )
}
