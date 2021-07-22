import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";
import { useFetchTodos } from "../hooks";

export const TodoList = ({ currentUser }) => {
  const fetchTodos = useFetchTodos();
  const { todoReducer, visibilityFilterReducer } = useSelector(
    (state) => state
  );
  const filterTodos = getTodosByVisibilityFilter(
    todoReducer,
    visibilityFilterReducer
  );

  useEffect(() => {
    fetchTodos(currentUser.uid);
  }, []);

  return (
    <Box my={3}>
      {filterTodos.length ? (
        filterTodos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          No Todos Yay!
        </Box>
      )}
    </Box>
  );
};
