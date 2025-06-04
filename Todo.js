console.log('Todo-App')
console.log('Tasks')
const Tasks = [
    { id: 1, text: 'Buy groceries' ,liked:false,mark:true},
    { id: 2, text: 'Walk the dog',liked:false,mark:true },
    { id: 3, text: 'Read a book',liked:false ,mark:false},
]
function addTask (id,text,liked){
   return Tasks.push({
    id: id,
    text: text,
    liked :liked,
    mark: false
   });
}

addTask(4,'Take a break', false)
addTask(5, 'Take a Walk', true)

const toMark = Tasks.find((task) => task.id === 1);

// const a = Tasks.map((d, i)=>{
//     if (d.id === 2){
//         console.log(`Task with id ${d.id} marked as done`)
//     return  d.mark = false
        
//     }
// })
// console.log(a)

// to mark  a task as completed
if (toMark){
    toMark.mark= false;
console.log('Task marked as done',Tasks[2].text);
   
}    
// to remove a task
let remove = Tasks.filter((task) => task.id !== 1);

// filter tasks as completed or pending

console.log(remove)