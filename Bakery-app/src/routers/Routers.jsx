import React from "react";
import routingData from "../features/jsonDatas/RoutingPaths";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

function Routers() {
  return (
    <div>
      <Routes>
        {routingData?.map((item, index) => {
          if (item?.auth) {
            return (
              <Route key={index} path={item?.path} element={<item.element />} />
            );
          } else {
            return (
              <Route element={<ProtectedRouter />} key={index}>
                <Route
                  key={index}
                  element={<item.element />}
                  path={item?.path}
                ></Route>
              </Route>
            );
          }
        })}
      </Routes>
    </div>
  );
}

export default Routers;
