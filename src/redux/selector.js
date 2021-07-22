import { VISIBILITY_FILTER } from "../constants";

export const getTodosByVisibilityFilter = (todoReducer, visibilityFiler) => {
  switch (visibilityFiler) {
    case VISIBILITY_FILTER.COMPLETED:
      return todoReducer.todos.filter((todo) => todo.completed);
    case VISIBILITY_FILTER.INCOMPLETED:
      return todoReducer.todos.filter((todo) => !todo.completed);
    default:
      return todoReducer.todos;
  }
};
