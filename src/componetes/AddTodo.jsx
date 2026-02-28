import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const todoNmaeElement = useRef();
  const todoDateElement = useRef();
  const navigetion = useNavigate();

  const handelOnSubmit = async (event) => {
    event.preventDefault();

    const todoName = todoNmaeElement.current.value;
    const todoDate = todoDateElement.current.value;

    todoNmaeElement.current.value = "";
    todoDateElement.current.value = "";

    const objList = { itemName: todoName, date: todoDate };

    await axios
      .post("http://localhost:8080/api/addFoodItem", objList)
      .then((res) => {
        console.log(res);
        navigetion("/todo-list");

        toast.success("added succesfully...!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("not successfully added..!");
      });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-auto h-auto  rounded-xl flex items-center justify-center bg-purple-400 ">
        <form className="p-5" onSubmit={handelOnSubmit}>
          <input
            type="text"
            className=" w-70 rounded mt-3 p-1 text-xl pl-3 bg-indigo-400  "
            placeholder="Enter Todo Here "
            ref={todoNmaeElement}
          />
          <br />
          <input
            type="date"
            className=" w-70 rounded mt-3 p-1 text-xl pl-3 pr-3 bg-indigo-400"
            ref={todoDateElement}
          />
          <br />
          <div className="text-center">
            <button
              type="submit"
              className="pl-4 pr-4 text-center rounded m-3 p-1.5 text-2xl bg-sky-500 hover:bg-black hover:text-white transition duration-700 ease-in-out"
            >
              <IoIosAddCircle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
