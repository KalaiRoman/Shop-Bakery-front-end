import React, { useState } from "react";
import UiLayout from "../../features/uiComponents/UiLayout";
import SearchHeaderLayout from "../../features/uiComponents/SearchHeaderLayout";
import { Col, Row } from "react-bootstrap";
import InputForm from "../../features/uiComponents/formComponents/InputForm";
import { ProductFormInitialState } from "../../features/constants/InitialFormState";
import InputDropdown from "../../features/uiComponents/formComponents/InputDropdown";
import Dropdown from "../../features/uiComponents/formComponents/Dropdown";
import Button from "../../features/uiComponents/Button";
import categoryDatas from "../../features/jsonDatas/CategoryData";

function AddNewProduct() {
  const [products, setProducts] = useState(ProductFormInitialState);
  const { productName, price, quantity, productimage, category } = products;
  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };
  return (
    <div className="c-body">
      <div>
        <SearchHeaderLayout
          title="Add a New Product"
          userSearch={() => null}
          userFilter={() => null}
        ></SearchHeaderLayout>
      </div>
      <UiLayout>
        <div>
          <Row>
            <Col>
              <InputForm
                label="Product Name"
                placeholder="Enter Your Product Name"
                value={productName}
                onChange={handleChange}
                name="productName"
                required={true}
              />
            </Col>
            <Col>
              <Dropdown
                label={"Category"}
                placeholder="Please Select Category"
                required={true}
                value={category}
                onChange={handleChange}
                name="category"
                data={categoryDatas}
              />
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col>
              <InputForm
                label="Price"
                placeholder="Enter Product Price"
                value={price}
                onChange={handleChange}
                name="price"
                required={true}
              />
            </Col>
            <Col>
              <InputForm
                label={"Quantity"}
                placeholder="Please Select Category"
                required={true}
                value={quantity}
                onChange={handleChange}
                name="quantity"
              />
            </Col>
          </Row>
        </div>

        <div className="mt-3">
          <Row>
            <label>Product Images</label>
          </Row>
        </div>

        <div className="mt-4">
          <Button
            title="Add New Product"
            className={"add-product-btn"}
          ></Button>
        </div>
      </UiLayout>
    </div>
  );
}

export default AddNewProduct;
