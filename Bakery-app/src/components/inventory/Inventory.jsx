import React, { useState } from "react";
import UiLayout from "../../features/uiComponents/UiLayout";
import SearchHeaderLayout from "../../features/uiComponents/SearchHeaderLayout";
import InputBoxSearch from "../../features/uiComponents/formComponents/InputBoxSearch";
import InputDropdown from "../../features/uiComponents/formComponents/InputDropdown";
import Button from "../../features/uiComponents/Button";
import Hoc from "../../HOC/Hoc";
function Inventory({ props }) {
  const [data, setData] = useState([
    {
      id: 101,
      productName: "Alice Johnson",
      quantity: "HR",
      price: "2018-03-15",
      status: "52,000",
      createdDate: "2025-01-01",
      action: "View",
    },
    {
      id: 102,
      productName: "Robert King",
      quantity: "Sales",
      price: "2017-09-10",
      status: "48,000",
      createdDate: "2025-01-02",
      action: "View",
    },
    {
      id: 103,
      productName: "Clara Smith",
      quantity: "Tech",
      price: "2019-01-20",
      status: "72,000",
      createdDate: "2025-01-03",
      action: "View",
    },
  ]);
  const inputSearch = () => {
    return (
      <div>
        <InputBoxSearch />
      </div>
    );
  };

  const searchFilter = () => {
    return (
      <div>
        <InputDropdown />
      </div>
    );
  };

  const handleChangePath = () => {
    props.navigate("/money-out/add-new-product");
  };
  return (
    <div className="main-money-out">
      <div>
        <SearchHeaderLayout
          title={"Inventory"}
          userSearch={inputSearch}
          userFilter={searchFilter}
        />
      </div>
      <UiLayout>
        <div>
          <div className="flex-end mb-3 cursor" onClick={handleChangePath}>
            <Button title="+ Add a new Product" className="addproduct"></Button>
          </div>
          <div class="table-wrapper">
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr>
                        <td>{item?.id}</td>
                        <td>{item?.productName}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.price}</td>
                        <td>{item?.status}</td>
                        <td>{item?.createdDate}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <i class="fa-solid fa-eye icon"></i>
                            <i class="fa-solid fa-pen-to-square icon"></i>
                            <i class="fa-solid fa-trash-can icon"></i>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </UiLayout>
    </div>
  );
}

export default Hoc(Inventory);
