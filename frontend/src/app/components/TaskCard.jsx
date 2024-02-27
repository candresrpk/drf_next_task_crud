"use client"
import { useRouter } from "next/navigation"

const TaskCard = ({task}) => {
  const router = useRouter()


  const handleDelete = async (id) => {
    console.log(id)

    if(window.confirm('Quieres eliminar esta tarea?')){
      const res = await  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}`, {
        method: 'DELETE',
      })
      router.refresh()
    }
  }

  const handleDone = async (id) => {
    console.log(id)

    const res = await  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/done/`, {
      method: 'POST',
    })
    if(res.status === 200){
      router.refresh()
    }
  }

  return (
    <div className="bg-slate-500 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center">
        <div>
            <h2 className="font-bold">{task.title} {task.done && <span>✅</span>}</h2>
            <p>{task.description}</p>
        </div>

        <div className="flex justify-between gap-x-2">
            <button className={
              "text-white rounded-md p-2 " + (task.done ? "bg-gray-800" : "bg-green-500") }
              onClick={() => handleDone(task.id)}>

              {task.done ? "check": "uncheck"}
            </button>

            <button className="bg-red-600 text-white rounded-md p-2" onClick={() => handleDelete(task.id)}>Eliminar</button>
            <button className="bg-indigo-600 text-white rounded-md p-2">editar</button>

        </div>
    </div>
  )
}

export default TaskCard