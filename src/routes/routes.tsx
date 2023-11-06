import { lazy } from "react";

export const routes = [
  {
    path: "/",
    name: "Projetos",
    Component: lazy(() =>
      import("../pages/Projects/Projects").then((module) => ({
        default: module.Projects,
      }))
    ),
  },
  {
    path: "/sobre",
    name: "Sobre",
    Component: lazy(() =>
      import("../pages/About/About").then((module) => ({
        default: module.About,
      }))
    ),
  },
  {
    path: "/contato",
    name: "Contato",
    Component: lazy(() =>
      import("../pages/Contact/Contact").then((module) => ({
        default: module.Contact,
      }))
    ),
  },
];
