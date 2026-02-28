import axios from "axios";
import List from "./list";
import { useEffect, useState } from "react";
import DeleteAll from "./deleteAll";
import EmptyMsg from "./emptyMsg";

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
      {" "}
      {userData == 0 && <EmptyMsg></EmptyMsg>}
      
      {userData.map((post) => (
        <List post={post}></List>
      ))}
    </>
  );
};

export default TodoList;
