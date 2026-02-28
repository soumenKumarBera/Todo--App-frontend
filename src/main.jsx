import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routs/App.jsx";
import AddTodo from "./componetes/AddTodo.jsx";
import TodoList from "./componetes/todoList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AddTodo></AddTodo> },
      { path: "/todo-list", element: <TodoList></TodoList> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
