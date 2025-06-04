console.log('Todo-App')
console.log('Tasks')


const Tasks = [
    { id: 1, text: 'Buy groceries' ,liked:false,mark:true},
    { id: 2, text: 'Walk the dog',liked:false,mark:true },
    { id: 3, text: 'Read a book',liked:false ,mark:false},
]
console.log(Tasks)


function addTask (id,text,liked){
   return Tasks.push({
    id: id,
    text: text,
    liked :liked
   });
}

addTask(4,'Take a break', false)
addTask(5, 'Take a Walk', true)

if (id === 1){
    Tasks.mark= false;
console.log('Task marked as done',Tasks.text);
   
}