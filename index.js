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
  addBtnRemoveItem();
}

function clearInput() {
  input.value = '';
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
