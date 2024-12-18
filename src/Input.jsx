import { PlusCircle } from "@phosphor-icons/react"

export function Input({ task, setTask, addTask }) {
  return (
    <div className="flex gap-2 w-[736px] mx-auto mt-[-28px] mb-16">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        className="flex-1 bg-gray-500 p-4 rounded-lg text-gray-100 placeholder-gray-300 outline-none border border-gray-700 focus:border focus:border-blue-normal"
      />
      <button
        onClick={addTask}
        className="flex items-center text-sm gap-2 text-white bg-blue-dark hover:bg-blue-normal rounded-lg p-4"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  )
}
