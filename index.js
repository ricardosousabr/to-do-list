const list = document.querySelector('.to-do-list');
const input = document.querySelector('.inputValue');

function checkInputValue() {
  const isValid = input.value.trim() != '';

  return isValid;
}

function addTask() {
  const addItem = document.createElement('li');

  addItem.innerHTML = input.value.trim();
  list.prepend(addItem);
  addItem.appendChild(buttonsContainer());
}

function clearInput() {
  input.value = '';
}

function buttonsContainer() {
  const container = document.createElement('div');

  container.appendChild(createEditInput());
  container.appendChild(addBtnSaveItem());
  container.appendChild(addBtnEditItem());
  container.appendChild(addBtnRemoveItem());

  return container;
}

function createEditInput() {
  const editInput = document.createElement('input');

  editInput.classList.add('edit-input');

  return editInput;
}

function addBtnEditItem() {
  const addItem = document.querySelector('li');
  const btnEditItem = document.createElement('button');

  btnEditItem.classList.add('edit-item');

  btnEditItem.addEventListener('click', () => {
    addItem.classList.add('editing');
  });

  btnEditItem.innerHTML = 'Editar';

  return btnEditItem;
}

function addBtnSaveItem() {
  const addItem = document.querySelector('li');
  const btnSaveItem = document.createElement('button');

  btnSaveItem.classList.add('save-item');

  btnSaveItem.addEventListener('click', () => {
    addItem.classList.remove('editing');
  });

  btnSaveItem.innerHTML = 'Salvar';

  return btnSaveItem;
}

function addBtnRemoveItem() {
  const item = document.querySelector('li');
  const btnRemoveItem = document.createElement('button');

  btnRemoveItem.addEventListener('click', () => item.remove());
  btnRemoveItem.innerHTML = 'Remover';

  console.log(item.textContent);

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
