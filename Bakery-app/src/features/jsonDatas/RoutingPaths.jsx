import {
  AddNewProduct,
  AvailableBalance,
  Dashboard,
  Inventory,
  Login,
  MoneyOut,
  MoneySavings,
  Register,
} from "../../pages/Pages";

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
    sidebar:false,
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
    sidebar:false,

  },

  {
    id: 3,
    name: "Dashboard",
    path: "/dashboard",
    auth: false,
    element: Dashboard,
    children: [],
    activeIcon: <i class="fa-solid fa-house"></i>,
    inactiveIcon: <i class="fa-solid fa-house"></i>,
    sidebar:true,

  },
  {
    id: 4,
    name: "Money Out",
    path: "/money-out",
    auth: false,
    element: MoneyOut,
    children: [],
    activeIcon: <i class="fa-solid fa-scale-unbalanced-flip"></i>,
    inactiveIcon: <i class="fa-solid fa-scale-unbalanced-flip"></i>,
    sidebar:true,

  },

  {
    id: 5,
    name: "A-Balance",
    path: "/available-balance",
    auth: false,
    element: AvailableBalance,
    children: [],
    activeIcon: <i class="fa-solid fa-wallet"></i>,
    inactiveIcon: <i class="fa-solid fa-wallet"></i>,
    sidebar:true,

  },

  {
    id: 6,
    name: "M-Savings",
    path: "/monthly-savings",
    auth: false,
    element: MoneySavings,
    children: [],
    activeIcon: <i class="fa-solid fa-money-bill"></i>,
    inactiveIcon: <i class="fa-solid fa-money-bill"></i>,
    sidebar:true,

  },
  {
    id: 7,
    name: "Inventory",
    path: "/inventory",
    auth: false,
    element: Inventory,
    children: [],
    activeIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    inactiveIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    sidebar:true,

  },
  {
    id: 8,
    name: "Add a New Product",
    path: "/money-out/add-new-product",
    auth: false,
    element: AddNewProduct,
    children: [],
    activeIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    inactiveIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    sidebar:false,

  },
  {
    id: 9,
    name: "Add a New Product",
    path: "/money-out/add-new-product/:id",
    auth: false,
    element: AddNewProduct,
    children: [],
    activeIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    inactiveIcon: <i class="fa-solid fa-arrow-trend-down"></i>,
    sidebar:false,

  },
];
export default routingData;
