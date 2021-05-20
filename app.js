let todos = [];

const addTodoBtn = document.getElementById('addTodo');
const todoInputText = document.getElementById('todo');
const todo = document.getElementById('todo');
const importantCheck = document.getElementById('important');
const urgentCheck = document.getElementById('urgent');
const todosContainer = document.querySelector('.todosContainer');
const fragment = document.createDocumentFragment();

addTodoBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if(!todo.value) {
    return;
  } else {
    const todo = {
      name: todoInputText.value,
      important: importantCheck.checked,
      urgent: urgentCheck.checked,
      timestamp: new Date().getTime()
    }

    todoInputText.value = '';
    importantCheck.checked = false;
    urgentCheck.checked = false;

    todosContainer.innerHTML = '';
    todos.push(todo);
    showTodos(todos);
  }
});

function showTodos(todos) {
  for(const todo of todos) {
    let singlediv = document.createElement('div');
    singlediv.classList.add('singleTodo');
    singlediv.innerHTML = `${todo.name}<img src="delete_bin.png" alt="delete" data-timeStamp=${todo.timestamp} class="delete" width="24px" height="24px">`;
    addBackgroundToDiv(todo.important, todo.urgent, singlediv);
    fragment.append()
  }
  todosContainer.appendChild(fragment);
}

function addBackgroundToDiv(important, urgent, div) {
  if(important && urgent) {
    div.style.backgroundColor = '#D1082D';
  } 
  else if (important) {
    div.style.backgroundColor = '#0EAD23';
  } 
  else if (urgent) {
    div.style.backgroundColor = '#FF8F17';
  } 
  else {
    div.style.backgroundColor = '#524E4C';
  }
}

todosContainer.addEventListener('click', function(event) {
  const ts = event.target.getAttribute('data-timeStamp');
  console.log(ts);
  if(event.target.nodeName === 'IMG') {
    event.target.parentElement.remove();
    for (let i = 0; i < todos.length; i++) {
      let element = todos[i];
      if(element.timestamp == ts) {
        console.log(element.timestamp);
        todos.splice(i,1);
        break;
      }
    }
  }
});

