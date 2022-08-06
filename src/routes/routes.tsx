import { Contact, Home } from "../pages";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    path: "/contato",
    name: "Contato",
    component: <Contact />,
  },
];
