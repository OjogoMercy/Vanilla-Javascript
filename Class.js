const redux = require("redux");

const createStore = redux.createStore;

// action type
const BORROW_BOOK = "BORROW_BOOK";
const ADD_BOOK = "ADD_BOOK";

// action creator
const borrowBook = (payload) => {
  return {
    type: BORROW_BOOK,
    payload,
  };
};

const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};

// initial state
const initialState = {
  books: 30,
  puff: 10,
  students: [{ id: 1, firstname: "Bola", lastname: "Ade", dept: "INS" }],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BORROW_BOOK:
      return {
        ...state,
        books: state.books - action.payload,
      };

    case ADD_BOOK:
      return {
        ...state,
        books: state.books + action.payload,
      };

    default:
      return state;
  }
};

// store

const store = createStore(reducer);

console.log("Initial state blo blo blo", store.getState());

store.subscribe(() => {
  console.log("updated store", store.getState());
});

store.dispatch(borrowBook(5));
store.dispatch(addBook(20));
store.dispatch(borrowBook(47));
