import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./helloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
        <HelloWorld />
        <TodoList />
    </Container>
  </StrictMode>
);
