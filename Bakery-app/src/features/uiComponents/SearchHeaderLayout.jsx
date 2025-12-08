function SearchHeaderLayout(props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="md fw-md">{props.title}</div>
      <div className="d-flex gap-5 align-items-center">
        <div>{props.userSearch()}</div>
        <div>{props.userFilter()}</div>
      </div>
    </div>
  );
}

export default SearchHeaderLayout;
