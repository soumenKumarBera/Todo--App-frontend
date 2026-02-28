const Header = () => {
  return (
    <div className="bg-gray-700">
      <div class="container ">
        {" "}
        <header class="d-flex justify-content-center py-3">
          {" "}
          <ul class="nav nav-pills">
            {" "}
            <li class=" ">
              <a href="#" class="nav-link   " aria-current="page">
                <div className="header-btn">AddTodo</div>
              </a>
            </li>{" "}
            <li class="nav-item ">
              <a href="#" class="nav-link">
                <div className="header-btn"> All-Todo-List</div>
              </a>
            </li>{" "}
            <li class="nav-item font-bold">
              <a href="#" class="nav-link">
                <div className="header-btn"> All-Delete</div>
              </a>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </div>
  );
};

export default Header;
