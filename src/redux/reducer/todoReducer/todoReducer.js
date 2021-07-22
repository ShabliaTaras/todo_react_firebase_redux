import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODO,
} from "../../reducer/todoReducer/actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, completed: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    case FETCH_TODO: {
      const { todos } = action.payload;
      return { todos };
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
