import { Contact, Projects } from "../pages";

export const routes = [
  {
    path: "/",
    name: "Projetos",
    component: <Projects />,
  },
  {
    path: "/contato",
    name: "Contato",
    component: <Contact />,
  },
];
