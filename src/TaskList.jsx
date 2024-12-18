import { CheckFat, ClipboardText, Trash } from "@phosphor-icons/react"
import { useState } from "react"
export function TaskList({ taskList, onCompletedTasksChange, onRemoveTask }) {
  const [checkedTasks, setCheckedTasks] = useState(() =>
    taskList.map(() => false)
  )

  function handleCheckboxChange(index) {
    setCheckedTasks((prevChecked) => {
      const newChecked = [...prevChecked]
      newChecked[index] = !newChecked[index]

      const completedCount = newChecked.filter(Boolean).length
      onCompletedTasksChange(completedCount)

      return newChecked
    })
  }

  return (
    <div className="flex flex-col w-[736px] mx-auto">
      <div className="border-t border-gray-400 w-[736px] my-7" />

      {taskList.length === 0 && ( // só renderiza se taskList não estiver vazio.
        <div className="flex flex-col items-center gap-4">
          <ClipboardText size={56} className="text-gray-400" />
          <div className="text-gray-300 text-center">
            <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
            <p className="text-sm">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {taskList.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-500 border border-gray-400 rounded-lg p-4 text-sm"
          >
            <label className="relative cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={checkedTasks[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <div
                className={`w-[18px] h-[18px] flex items-center justify-center cursor-pointer bg-gray-500 border-2 border-blue-normal rounded-full peer-checked:bg-purple-normal peer-checked:border-none`}
              >
                {/* Ícone quando marcado */}
                {checkedTasks[index] && (
                  <CheckFat
                    size={12}
                    weight="fill"
                    className="text-gray-100 text-center"
                  />
                )}
              </div>
            </label>
            <p
              className={`flex-1 ${
                checkedTasks[index]
                  ? "line-through text-gray-300"
                  : "text-gray-100"
              }`}
            >
              {task}
            </p>
            <Trash
              onClick={() => onRemoveTask(index)}
              size={16}
              className="ml-auto text-gray-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
