import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700  ">
      <div class="container ">
        {" "}
        <header class="d-flex justify-content-center py-3">
          {" "}
          <ul class="nav nav-pills">
            {" "}
            <li class=" ">
              <Link to="/" class="nav-link   " aria-current="page">
                <div className="header-btn">AddTodo</div>
              </Link>
            </li>{" "}
            <li class="nav-item ">
              <Link to="todo-list" class="nav-link">
                <div className="header-btn"> All-Todo-List</div>
              </Link>
            </li>{" "}
            <li class="nav-item font-bold">
              <Link to="all-delete" class="nav-link">
                <div className="header-btn"> All-Delete</div>
              </Link>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </div>
  );
};

export default Header;
