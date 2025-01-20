const tasks = JSON.parse(localStorage.getItem('tasks')) || []
const usersInput = document.querySelector('#usersInput')
const button = document.querySelector('.submit-btm')
const listTasks=document.getElementById('list-tasks')


button.addEventListener('click', (e) =>{
    e.preventDefault()
    tasks.push(usersInput.value)
    console.log(tasks)

    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTask(usersInput.value)
})

// Afficher toute les tasks
function displayAllTasks(){
    tasks.forEach((task) => {
        displayTask(task)
    })
}

// Charger toute les tasks
function loadTask(){
    displayAllTasks()
    console.log(tasks)

}

// Créer une tâche et l'afficher en texte
function displayTask(task){
    const li = document.createElement('li')
    listTasks.appendChild(li)
    li.innerText = task
    
}
loadTask()