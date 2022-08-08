import { About, Contact, Projects } from "../pages";

export const routes = [
  {
    path: "/",
    name: "Projetos",
    component: <Projects />,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: <About />,
  },
  {
    path: "/contato",
    name: "Contato",
    component: <Contact />,
  },
];
