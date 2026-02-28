import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "../componetes/AddTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "../componetes/todoList";
import Header from "../componetes/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <ToastContainer position="bottom-center"></ToastContainer>
     
      <div className=" full-screen p-15 ">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
