import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import firebase from "firebase";

export const AddTodo = ({ currentUser }) => {
  const [todo, setTodo] = useState({
    content: "",
    completed: false,
    createdBy: currentUser.uid,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const todosRef = firebase.database().ref("todos");
    const newTodoRef = todosRef.push();
    newTodoRef.set(todo);

    setTodo({
      content: "",
      completed: false,
      createdBy: currentUser.uid,
    });
  };

  const handleInput = (e) => {
    setTodo((todo) => ({ ...todo, content: e.target.value }));
  };

  return (
    <Flex>
      <FormControl>
        <Input
          type="text"
          value={todo.content}
          onChange={handleInput}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
        />
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={handleSubmit}
        disabled={!todo}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
      >
        Add Todo
      </Button>
    </Flex>
  );
};
