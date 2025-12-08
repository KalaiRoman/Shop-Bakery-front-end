import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Image from "../features/uiComponents/Image";
import { SmallLogo } from "../assets/images";
import routingData from "../features/jsonDatas/RoutingPaths";
import Hoc from "../HOC/Hoc";
function ProtectedRouter({ props }) {
  const path = window.location.pathname;
  const lastId=window.location.pathname.split("/").at(-1);


  const handleChangePath = (params) => {
    props.navigate(params);
  };
  const token = true;
  return token ? (
    <div className="protected-main">
      <div className="left-protected">
        <div className="image-logo">
          <Image
            className={"header-logo"}
            alt="header-logo"
            image={SmallLogo}
          />
        </div>

        <div className="body-protected">
          {routingData?.map((item, index) => {
            if (!item?.auth && item?.sidebar === true) {
              return (
                <div
                  className={
                    (item?.path == "/money-out/add-new-product"
                      ? "money-out"
                      : item?.path == `/money-out/add-new-product/${lastId}`
                      ? "/money-out"
                      : item?.path) ==
                    (path == "/money-out/add-new-product"
                      ? "/money-out"
                      : path == `/money-out/add-new-product/${lastId}`
                      ? "/money-out"
                      : path)
                      ? "active-protected-list mt-2 mb-1 fw-sm"
                      : "inactive-protected-list mt-2 mb-1"
                  }
                  onClick={() => handleChangePath(item.path)}
                >
                  <div>{item?.activeIcon}</div>
                  <div>{item?.name}</div>
                </div>
              );
            }
          })}
        </div>

        <div className="footer-protected">
          <div>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div>Logout</div>
        </div>
      </div>
      <div className="right-protected">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Hoc(ProtectedRouter);
