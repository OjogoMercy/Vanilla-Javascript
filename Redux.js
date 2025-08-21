const redux = require('redux');
const { createStore } = redux;
console.log('Todo app with Redux is running!');
// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    };
}
const removeTodo = (index) => {
    return {
        type: REMOVE_TODO,
        payload: text
    }
}
const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        payload: index
   }
}
// Initial State
console.log('Initial State of the Todo App');
const initialState = {
    todos: [
        { text: 'Learn Redux', completed: false },
        { text: 'Build a Redux app', completed: false },
        { text: 'Deploy the app', completed: false },
        {text:'Dont do Favours Classwork', completed: false}
    ]
}
// Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[state.todos,{text:action.payload, completed:false}]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos:state.todos.filter((todo,index) => index !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return{...todo, comleted:!todo.completed}
                    }return todo
                })
            }
    }
    
}