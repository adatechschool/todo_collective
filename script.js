const tasks = JSON.parse(localStorage.getItem('tasks')) || []
const usersInput = document.querySelector('#usersInput')
const button = document.querySelector('.submit-btm')
const listTasks=document.getElementById('list-tasks')
const trash=document.getElementById("trash")
 

button.addEventListener('click', (e) =>{
    e.preventDefault()
    let task = {
        text : usersInput.value, 
        completed : false  
    }
    addTask(task)
    usersInput.value="";
   
    

})

trash.addEventListener('click',()=>{
deleteAllTasks()
li.remove()  
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
    li.innerText = task.text
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    li.appendChild(checkBox)
    checkBox.addEventListener('change',() => {
        e.preventDefault()
        if (checkBox.checked){
            task.completed = true
            li.style.textDecoration = "line-through"
        }else{
            li.style.textDecoration = "none"
        }
        toggleCompletedTask(task)
        console.log(toggleCompletedTask(task))
    })
}

const addTask = (task)=>{
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTask(task)
}
function toggleCompletedTask (taskToFind){
  const taskToModified =  tasks.find(task =>task.text=== taskToFind.text)
  return taskToModified
}
 
const deleteAllTasks = () =>{
    localStorage.removeItem('tasks')
}


loadTask()

