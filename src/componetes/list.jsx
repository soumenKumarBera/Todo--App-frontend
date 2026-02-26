const List = () => {
  return (
    <div class="container text-center bg-amber-100 mb-2">
      <div class="row">
        <div class="col border-2 p-2 text-2xl">Column</div>
        <div class="col border-2 p-2 text-2xl ">Column</div>
        <div class="col border-2 p-2 text-2xl">
          <button type="button" className="btn btn-danger">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
