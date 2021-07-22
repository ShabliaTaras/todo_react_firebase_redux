import firebase from "firebase";
import { fetchTodo } from "../redux/reducer/todoReducer/actions";
import { useDispatch } from "react-redux";

export const useFetchTodos = () => {
  const dispatch = useDispatch();
  const db = firebase.database();
  return (userId) => {
    db.ref("todos")
      .orderByChild("createdBy")
      .equalTo(userId)
      .on("value", (newTodos) => {
        const data = newTodos.val();
        const todos = [];
        for (const key in data) {
          todos.push({
            id: key,
            ...data[key],
          });
        }

        dispatch(fetchTodo(todos));
      });
  };
};
