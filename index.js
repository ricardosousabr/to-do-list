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
  addBtnEditItem();
  addBtnRemoveItem();
}

function clearInput() {
  input.value = '';
}

function addBtnEditItem() {
  const item = document.querySelector('li');
  const bntEditItem = document.createElement('button');
  const itemValue = item.value;

  bntEditItem.addEventListener('click', () => console.log(itemValue));
  bntEditItem.innerHTML = 'Editar';
  item.appendChild(bntEditItem);
}

function addBtnRemoveItem() {
  const item = document.querySelector('li');
  const bntRemoveItem = document.createElement('button');

  bntRemoveItem.addEventListener('click', () => item.remove());
  bntRemoveItem.innerHTML = 'Remover';
  item.appendChild(bntRemoveItem);
}

function handleSubmit(event) {
  event.preventDefault();

  if (checkInputValue()) {
    addTask();
  }
  clearInput();
}

taskForm.addEventListener('submit', handleSubmit);
