console.log('Todo-App')
console.log('Tasks')
const Tasks = [
    { id: 1, text: 'Buy groceries' ,liked:false,mark:true,pending: true},
    { id: 2, text: 'Walk the dog',liked:false,mark:false ,pending: false},
    { id: 3, text: 'Read a book',liked:false ,mark:false,pending: true},
]
function addTask (id,text,liked){
   return Tasks.push({
    id: id,
    text: text,
    liked :liked,
    mark: false,
    pending: true
   });
}

addTask(4,'Take a break', false)
addTask(5, 'Take a Walk', true)

const toMark = Tasks.find((task) => task.id === 2);
if (toMark){
    toMark.mark= true;
console.log('Task marked as done',Tasks[2].text);
   
}    
// to remove a task
let remove = Tasks.filter((task) => task.id !== 1);
// console.log(remove)

// filter tasks as completed or pending

const toComplete = Tasks.filter((tasks) => tasks.pending === false)
console.log('Completed Tasks:', toComplete);

const pending = Tasks.filter((tasks)=> tasks.pending === true)
console.log('Pending Tasks:', pending);

// to display all tasks with their status 
const toDisplay = Tasks.filter((tasks) => tasks.text);
toDisplay.forEach (task => {
    console.log(`Tasks":${task.text} --:Pending :${task.pending}`)   
})