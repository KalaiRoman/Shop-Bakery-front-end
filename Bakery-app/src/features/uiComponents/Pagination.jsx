import React from "react";
import ReactPaginate from "react-paginate";

function Pagination() {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={"handlePageClick"}
        pageRangeDisplayed={10}
        pageCount={2}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
