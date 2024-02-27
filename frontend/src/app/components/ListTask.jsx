import TaskCard from "./TaskCard"

async function loadTasks(){
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`)
  const data = await res.json()
  return data
}

async function ListTask() {

  const tasks = await loadTasks()


  return (
    <div 
    className="bg-slate-700 p-4 w-full">
      <h1>Tasks List</h1>

      {tasks.map(task => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default ListTask