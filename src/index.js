import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { firebase } from "./utils";

const firebaseConfig = {
  apiKey: "AIzaSyCYgUJr7ayciKRPjj0NaQxcZyikI3DvxNg",
  authDomain: "fir-project-7c208.firebaseapp.com",
  databaseURL:
    "https://fir-project-7c208-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-project-7c208",
  storageBucket: "fir-project-7c208.appspot.com",
  messagingSenderId: "450600913826",
  appId: "1:450600913826:web:3ab50ff0d0c07c273200fb",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
