import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
