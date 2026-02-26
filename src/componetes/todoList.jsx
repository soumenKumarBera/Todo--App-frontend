import axios from "axios";
import List from "./list";
import { useEffect, useState } from "react";
import DeleteAll from "./deleteAll";

const TodoList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/getFoodItem").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);

  return (
    <>
      <DeleteAll></DeleteAll>
      {userData.map((post) => (
        <List post={post}></List>
      ))}
    </>
  );
};

export default TodoList;
