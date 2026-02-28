import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./componetes/AddTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./componetes/todoList";
import Header from "./componetes/header";

function App() {
  return (
    <>
      <Header></Header>
       <ToastContainer position="bottom-center"></ToastContainer>
      <AddTodo></AddTodo>
      {/* <div className="bg-gray-500 full-screen p-15 ">
        <TodoList></TodoList>
      </div>  */}
    </>
  );
}

export default App;
