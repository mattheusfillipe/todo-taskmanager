import { CheckFat, ClipboardText, Trash } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function TaskList({ taskList, onCompletedTasksChange, onRemoveTask }) {
  const [checkedTasks, setCheckedTasks] = useState(() =>
    taskList.reduce((acc, task) => {
      acc[task.id] = false
      return acc
    }, {})
  )

  function handleCheckboxChange(taskId) {
    setCheckedTasks((prevChecked) => {
      const newChecked = { ...prevChecked }
      newChecked[taskId] = !newChecked[taskId]

      const completedCount = Object.values(newChecked).filter(Boolean).length
      onCompletedTasksChange(completedCount)

      return newChecked
    })
  }

  return (
    <div className="flex flex-col w-[736px] mx-auto">
      <div className="border-t border-gray-400 w-[736px] my-7" />

      {taskList.length === 0 && ( // só renderiza se taskList estiver vazio.
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", visualDuration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <ClipboardText size={56} className="text-gray-400" />
          <div className="text-gray-300 text-center">
            <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
            <p className="text-sm">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {taskList.map((task) => (
            // Renderiza cada tarefa com checkbox, nome e botão de remover

            <motion.div
              layout
              key={task.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ type: "tween", visualDuration: 0.5 }}
              className="flex items-start gap-4 bg-gray-500 border border-gray-400 rounded-lg p-4 text-sm"
            >
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={checkedTasks[task.id]}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div
                  className={`w-[18px] h-[18px] flex items-center justify-center cursor-pointer bg-gray-500 border-2 border-blue-normal rounded-full peer-checked:bg-purple-normal peer-checked:border-none`}
                >
                  {/* Ícone quando marcado */}
                  {checkedTasks[task.id] && (
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
                  checkedTasks[task.id]
                    ? "line-through text-gray-300"
                    : "text-gray-100"
                }`}
              >
                {task.text}
              </p>
              <Trash
                onClick={() => onRemoveTask(task.id)}
                size={16}
                className="ml-auto text-gray-300 cursor-pointer"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
