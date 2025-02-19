import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./helloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />

      <AlertButton text="Click me!" message="You click me!"/>
      <MyButton text="Ssmash me!" onSmash={() => alert("You smash me!")}/>
      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("Toolbar clicked");
      }}/>
      <SearchForm />

      <SayHelloForm />

      <Counter />
    </Container>
  </StrictMode>
);
