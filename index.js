const list = document.querySelector('.to-do-list');
const input = document.querySelector('.inputValue');

function checkInputValue() {
  const isValid = input.value.trim() != '';

  return isValid;
}

function addTask() {
  const addItem = document.createElement('li');
  const createTesk = document.createElement('span');
  const taskValue = input.value.trim();

  addItem.classList.add('list-item');
  createTesk.classList.add('task');
  addItem.prepend(createTesk);
  createTesk.innerHTML = taskValue;
  list.appendChild(addItem);
  addItem.appendChild(createEditInput(taskValue));
  addItem.appendChild(buttonsContainer());
}

function clearInput() {
  input.value = '';
}

function buttonsContainer() {
  const container = document.createElement('div');

  container.classList.add('btn-box');
  container.appendChild(addBtnSaveItem());
  container.appendChild(addBtnEditItem());
  container.appendChild(addBtnRemoveItem());

  return container;
}

function createEditInput(taskValue) {
  const editInput = document.createElement('input');

  editInput.classList.add('edit-input');
  editInput.setAttribute('value', taskValue);

  return editInput;
}

function addBtnEditItem() {
  const btnEditItem = document.createElement('button');

  btnEditItem.classList.add('edit-item', 'btn');
  btnEditItem.addEventListener('click', () => {
    const item = btnEditItem.closest('li');
    btnEditItem.closest('li').classList.add('editing');
    item.querySelector('.task').classList.add('task-hidden');
  });

  btnEditItem.innerHTML = 'Editar';

  return btnEditItem;
}

function addBtnSaveItem() {
  const btnSaveItem = document.createElement('button');

  btnSaveItem.classList.add('save-item', 'btn');
  btnSaveItem.addEventListener('click', () => {
    const updatedTask = document.createElement('span');
    const item = btnSaveItem.closest('li');
    const inputEdit = item.querySelector('.edit-input');
    item.classList.remove('editing');
    item.prepend(updatedTask);
    updatedTask.innerHTML = inputEdit.value;
    updatedTask.classList.add('task');
  });

  btnSaveItem.innerHTML = 'Salvar';

  return btnSaveItem;
}

function addBtnRemoveItem() {
  const btnRemoveItem = document.createElement('button');

  btnRemoveItem.classList.add('btn');
  btnRemoveItem.addEventListener('click', () => {
    btnRemoveItem.closest('li').remove();
  });

  btnRemoveItem.innerHTML = 'Remover';

  return btnRemoveItem;
}

function handleSubmit(event) {
  event.preventDefault();

  if (checkInputValue()) {
    addTask();
  }
  clearInput();
}

taskForm.addEventListener('submit', handleSubmit);
