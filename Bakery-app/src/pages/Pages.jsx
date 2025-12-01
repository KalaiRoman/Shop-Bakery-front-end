import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Signup"));
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));
export { Login, Register, Dashboard };
