import "./App.css";
import AddTodo from "./componetes/AddTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center"></ToastContainer>
      <AddTodo></AddTodo>
    </>
  );
}

export default App;
