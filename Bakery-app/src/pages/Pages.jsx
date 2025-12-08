import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Signup"));
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));
const MoneyOut = lazy(() => import("../components/moneyOut/MoneyOut"));
const AvailableBalance = lazy(() =>
  import("../components/availableBalance/AvailableBalance")
);
const MoneySavings = lazy(() =>
  import("../components/MoneySavings/MoneySavings")
);
const Inventory = lazy(() => import("../components/inventory/Inventory"));
const AddNewProduct = lazy(() => import("../components/moneyOut/AddNewProduct"));


export {
  Login,
  Register,
  Dashboard,
  MoneyOut,
  AvailableBalance,
  MoneySavings,
  Inventory,
  AddNewProduct
};
