const form = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('input-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const texto = inputTarefa.value.trim();
  if (!texto) return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.classList.add('texto-tarefa');
  span.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.classList.add('btn-remover');
  btnRemover.textContent = '✕';
  btnRemover.title = 'Remover tarefa';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnRemover);

  listaTarefas.appendChild(li);

  inputTarefa.value = '';
  inputTarefa.focus();
});

listaTarefas.addEventListener('click', function (event) {
  const li = event.target.closest('li');
  if (!li) return;

  if (event.target.classList.contains('btn-remover')) {
    li.remove();
    return;
  }

  if (event.target.type === 'checkbox') {
    li.classList.toggle('concluida', event.target.checked);
    return;
  }

  li.remove();
});
