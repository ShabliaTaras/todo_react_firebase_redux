import {
  Box,
  Checkbox,
  Text,
  Input,
  Flex,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import firebase from "firebase";

export const Todo = ({ todo }) => {
  const [todoForEdit, setTodoForEdit] = useState(null);

  const handleCheked = (e) => {
    e.preventDefault();
    const { id, ...restProps } = todo;
    const postRef = firebase.database().ref("todos/" + todo.id);
    postRef.set({ ...restProps, completed: !todo.completed });
  };

  const handleDelete = () => {
    firebase
      .database()
      .ref()
      .child("todos/" + todo.id)
      .remove();
  };
  const handleInput = (e) => {
    setTodoForEdit((todo) => ({ ...todo, content: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postRef = firebase.database().ref("todos/" + todo.id);
    const { id, ...restProps } = todoForEdit;
    postRef.set(restProps);

    setTodoForEdit(null);
  };

  return todoForEdit ? (
    <Flex alignItems="center">
      <FormControl>
        <Input
          type="text"
          value={todoForEdit.content}
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
        Edit Todo
      </Button>

      <CloseIcon
        w={3}
        h={3}
        cursor="pointer"
        onClick={() => {
          setTodoForEdit(null);
        }}
        marginLeft="15px"
      />
    </Flex>
  ) : (
    <Box
      mb={1}
      bgColor="gray"
      p={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Checkbox
        onChange={handleCheked}
        colorScheme="teal"
        isChecked={todo.completed}
      >
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
      <Flex>
        <EditIcon
          marginRight="25px"
          w={3}
          h={3}
          cursor="pointer"
          onClick={() => setTodoForEdit(todo)}
        />
        <CloseIcon w={3} h={3} cursor="pointer" onClick={handleDelete} />
      </Flex>
    </Box>
  );
};
