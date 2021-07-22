export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_TODO = "FETCH_TODO";

let nextTodoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const fetchTodo = (todos) => ({
  type: FETCH_TODO,
  payload: { todos },
});
