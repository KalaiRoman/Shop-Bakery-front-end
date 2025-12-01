import { Dashboard, Login, Register } from "../../pages/Pages";

const routingData = [
  {
    id: 1,
    name: "Login",
    path: "/",
    auth: true,
    element: Login,
    children: [],
    activeIcon: "",
    inactiveIcon: "",
  },
  {
    id: 2,
    name: "Register",
    path: "/signup",
    auth: true,
    element: Register,
    children: [],
    activeIcon: "",
    inactiveIcon: "",
  },

  {
    id: 3,
    name: "Dashboard",
    path: "/dashboard",
    auth: false,
    element: Dashboard,
    children: [],
    activeIcon: "",
    inactiveIcon: "",
  },
];
export default routingData;
