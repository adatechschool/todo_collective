const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const userInput = document.querySelector('#usersInput');
const button = document.querySelector('#submit-btn');
const listTasks = document.getElementById('list-tasks');
const trash = document.getElementById('trash');

button.addEventListener('click', (e) => {
  e.preventDefault();
  let task = {
    text: userInput.value,
    completed: false,
    id: Date.now(),
  };
  addTask(task);
  userInput.value = '';
});

// Afficher toute les tasks
function displayAllTasks() {
  tasks.forEach((task) => {
    displayTask(task);
  });
}

// Charger toute les tasks
function loadTask() {
  displayAllTasks();
  console.log(tasks);
}

// Créer une tâche et l'afficher en texte
function displayTask(task) {
  const li = document.createElement('li');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.appendChild(checkBox);

  let span = document.createElement('span');
  span.textContent = task.text;
  li.appendChild(span);
  
  const trash = document.createElement('img');
  trash.src = 'trash.svg';
  trash.id = 'trash';
  li.appendChild(trash);
  trash.addEventListener('click', () => {
    //deleteAllTasks();
    li.remove();
  });
  checkBox.addEventListener('change', (e) => {
    e.preventDefault();
    if (checkBox.checked) {
      task.completed = true;
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
    toggleCompletedTask(task.id);
    
  });
  listTasks.appendChild(li);
  if(tasks.length>0){
     listTasks.style.border= "1px solid #eee";
  }
}

const addTask = (task) => {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTask(task);
};

function toggleCompletedTask(taskId) {
  const taskToModify = tasks.find((task) => task.id === taskId);
  if(taskToModify)
    {
        console.log(taskToModify)
    };
}

const deleteAllTasks = () => {
  localStorage.removeItem('tasks');
};

loadTask();
