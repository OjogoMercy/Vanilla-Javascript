const redux = require("redux");

const createStore = redux.createStore;

// action type
const ActionTypes = {
  BORROW_BOOK: "BORROW_BOOK",
  ADD_BOOK: "ADD_BOOK",
  ADD_PUFF: "ADD_PUFF",
  REMOVE_PUFF: "REMOVE_PUFF",
  ADD_STUDENT: "ADD_STUDENT",
  REMOVE_STUDENT: "REMOVE_STUDENT",
  ADD_MULTIPLE: "ADD_MULTIPLE",
  REMOVE_MULTIPLE: "REMOVE_MULTIPLE",
  ADD_STUDENTS: "ADD_STUDENTS",
};
// action creator
const createAction = (type) => (payload) => ({ type, payload });
const borrowBook = createAction(ActionTypes.BORROW_BOOK);
const addBook = createAction(ActionTypes.ADD_BOOK);
const addPuff = createAction(ActionTypes.ADD_PUFF);
const removePuff = createAction(ActionTypes.REMOVE_PUFF);
const addStudent = createAction(ActionTypes.ADD_STUDENT);
const removeStudent = createAction(ActionTypes.REMOVE_STUDENT);
const addMultiple = createAction(ActionTypes.ADD_MULTIPLE);
const removeMultiple = createAction(ActionTypes.REMOVE_MULTIPLE);
const addStudents = createAction(ActionTypes.ADD_STUDENTS);

// initial state
const initialState = {
  books: 30,
  puff: 10,
  students: [{ id: 1, firstname: "Bola", lastname: "Ade", dept: "INS" }],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BORROW_BOOK:
      return {
        ...state,
        books: Math.max(0, state.books - action.payload),
      };

    case ActionTypes.ADD_BOOK:
      return {
        ...state,
        books: state.books + action.payload,
      };
    case ActionTypes.ADD_PUFF:
      return {
        ...state,
        puff: state.puff + action.payload,
      };
    case ActionTypes.REMOVE_PUFF:
      return {
        ...state,
        puff: Math.max(0, state.puff - action.payload),
      };
    case ActionTypes.ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case ActionTypes.REMOVE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ActionTypes.ADD_MULTIPLE:
      return {
        ...state,
        books: state.books + action.payload.books,
        puff: state.puff + action.payload.puff,
        students: [...state.students, ...action.payload.students],
      };
    case ActionTypes.REMOVE_MULTIPLE:
      return {
        ...state,
        books: Math.max(0, state.books - action.payload.books),
        puff: Math.max(0, state.puff - action.payload.puff),
        students: state.students.filter(
          (student) => !action.payload.students.some((s) => s.id === student.id)
        ),
      };
    case ActionTypes.ADD_STUDENTS:
      return {
        ...state,
        students: [...state.students, ...action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);
[
  borrowBook(5),
  removePuff(5),
  removeStudent({ id: 1 }),
  addMultiple({
    books: 5,
    puff: 3,
    students: [{ id: 3, firstname: "John", lastname: "Doe", dept: "CS" }],
  }),
  removeMultiple({
    books: 2,
    puff: 1,
    students: [{ id: 3, firstname: "John", lastname: "Doe", dept: "CS" }],
  }),
  addStudents([
    { id: 4, firstname: "Jane", lastname: "Doe", dept: "Math" },
    { id: 5, firstname: "Alice", lastname: "Smith", dept: "Physics" },
  ]),
].forEach(store.dispatch);
console.log("Initial state blo blo blo", store.getState());
store.subscribe(() => {
  console.log("updated store", store.getState());
});

