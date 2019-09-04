import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Stats from "./src/pages/Stats";
import Rewards from "./src/pages/Rewards";
import Profile from "./src/pages/Profile";
import Form from "./src/pages/Form";

export const ROUTES = [
  {
    action: "home",
    component: Home
  },
  {
    action: "login",
    component: Login
  },
  {
    action: "signup",
    component: Signup
  },
  {
    title: "Home",
    icon: "home",
    action: "dashboard",
    component: Dashboard,
    header: true,
    footer: true
  },
  {
    title: "Stats",
    icon: "chart-pie",
    action: "stats",
    component: Stats,
    header: true,
    footer: true
  },
  {
    title: "Rewards",
    icon: "star",
    action: "rewards",
    component: Rewards,
    header: true,
    footer: true
  },
  {
    title: "Profile",
    icon: "user",
    action: "profile",
    component: Profile,
    header: true,
    footer: true
  },
  {
    title: "Form",
    action: "form",
    component: Form,
    header: true
  }
];
