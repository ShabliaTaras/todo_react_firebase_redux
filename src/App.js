import { Container, Heading, Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import { Login } from "./components/Login";
import { firebase } from "./utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (setCurrentUser) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, [setCurrentUser]);

  return (
    <Container maxW="container.sm">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="30px"
      >
        <Heading my="4">Todo List</Heading>
        {currentUser && (
          <Button onClick={() => firebase.auth().signOut()}>Logout</Button>
        )}
      </Flex>
      {currentUser ? (
        <>
          <AddTodo currentUser={currentUser} />
          <TodoList currentUser={currentUser} />
          <VisibilityFilter />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
