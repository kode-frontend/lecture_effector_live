import React from "react";
import { Normalize } from "styled-normalize";
import { TodoListConnector } from "./flows/todo-list/coneectors/todo-list-connector";

function App() {
  return (
    <>
      <Normalize />
      <TodoListConnector />
    </>
  );
}

export default App;
