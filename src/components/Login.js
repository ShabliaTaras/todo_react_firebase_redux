import {
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  useToast,
  Tab,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import { useState } from "react";
import { firebase } from "../utils";

const SIGN_IN = "signIn";
const SIGN_UP = "signUp";

export const Login = () => {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentTab, setCurrentTab] = useState(SIGN_IN);

  const handleSubmit = () => {
    if (currentTab === SIGN_IN) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => toast({ description: error.message }));
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log(firebase.auth().currentUser);
        })

        .catch((error) => toast({ description: error.message }));
    }
  };

  return (
    <>
      <Tabs marginBottom="20px" isFitted>
        <TabList>
          <Tab onClick={() => setCurrentTab(SIGN_IN)}>Sign In</Tab>
          <Tab onClick={() => setCurrentTab(SIGN_UP)}>Sign Up</Tab>
        </TabList>
      </Tabs>

      <Flex flexDirection="column">
        <FormControl marginBottom="20px">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <FormControl marginBottom="20px">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          onClick={handleSubmit}
          disabled={!email || !password}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >
          {currentTab === SIGN_IN ? "Sign In" : "Sign Up"}
        </Button>
      </Flex>
    </>
  );
};
