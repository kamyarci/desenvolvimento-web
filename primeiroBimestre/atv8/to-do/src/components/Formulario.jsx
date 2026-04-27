export default function Formulario({ inputValue, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Digite uma nova tarefa"
        className="input"
      />
      <button type="submit" className="btn-add">Adicionar</button>
    </form>
  )
}
