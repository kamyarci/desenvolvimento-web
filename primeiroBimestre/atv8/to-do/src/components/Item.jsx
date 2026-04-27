export default function Item({ task, onRemove }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onRemove(task.id)} className="btn-remove">
        Remover
      </button>
    </li>
  )
}
