const List = ({ post }) => {
  return (
    <div class="container text-center bg-amber-100 mb-2">
      <div class="row">
        <div class="col border-2 p-2 text-2xl">
          <span class="badge text-bg-primary float-left">{post.id}</span>{" "}
          {post.itemName}
        </div>
        <div class="col border-2 p-2 text-2xl ">{post.date}</div>
        <div class="col border-2 p-2 text-2xl">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
