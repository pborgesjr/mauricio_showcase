import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { DefaultLayout } from "../components";
import { routes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<DefaultLayout>{route.component}</DefaultLayout>}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
