let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const userInput = document.querySelector('#usersInput');
const button = document.querySelector('#submit-btn');
const listTasks = document.getElementById('list-tasks');
const trash = document.getElementById('trash');

button.addEventListener('click', (e) => {
  e.preventDefault();
  let task = {
    text: userInput.value,
    done: false,
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
  span.contentEditable = true;
  li.appendChild(span);

  const trash = document.createElement('img');
  trash.src = 'trash.svg';
  trash.id = 'trash';
  li.appendChild(trash);
  trash.addEventListener('click', () => {
    deleteTask(task.id);
    li.remove();
  });
  checkBox.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(toggleCompletedTask(task.id));
    console.log('clicked');
    if (checkBox.checked) {
      //task.done = true;
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
  });

  listTasks.appendChild(li);
  if (tasks.length > 0) {
    listTasks.style.border = '1px solid #eee';
  }
}

const addTask = (task) => {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTask(task);
};

function toggleCompletedTask(taskId) {
  const taskToModify = tasks.find((task) => task.id === taskId);
  if (taskToModify) {
    taskToModify.done = !taskToModify.done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return taskToModify;
  } else {
    return "Je n'ai rien trouvé";
  }
}
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id != taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const deleteAllTasks = () => {
  localStorage.removeItem('tasks');
};

loadTask();

//ToDo ajouter une méthode permettant de modifier le texte d‘une tâche