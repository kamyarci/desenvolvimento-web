import { useState } from 'react'
import Formulario from './components/Formulario'
import Item from './components/Item'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask(e) {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTask = { id: Date.now(), text: inputValue.trim() }
    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <Formulario
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleAddTask}
      />

      <ul className="task-list">
        {tasks.map(task => (
          <Item key={task.id} task={task} onRemove={handleRemoveTask} />
        ))}
      </ul>
    </div>
  )
}
