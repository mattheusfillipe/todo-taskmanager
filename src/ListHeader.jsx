export function ListHeader({ taskList, completedTasks }) {
  return (
    <div className="flex justify-between w-[736px] mx-auto">
      <div className="flex gap-2 items-center">
        <p className="font-bold text-blue-normal">Tarefas criadas</p>
        <span className="bg-gray-400 text-gray-200 text-xs px-2 py-[2px] rounded-full font-bold">
          {taskList.length === 0 ? 0 : taskList.length}
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <p className="font-bold text-purple-normal">Tarefas concluídas</p>
        <span className="bg-gray-400 text-gray-200 text-xs px-2 py-[2px] rounded-full font-bold">
          {completedTasks}
        </span>
      </div>
    </div>
  )
}
