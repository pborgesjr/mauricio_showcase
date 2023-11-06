import React, { Suspense } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { DefaultLayout } from "../components";
import { routes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          {routes.map(({ Component, name, path }) => (
            <Route
              key={name}
              path={path}
              element={
                <DefaultLayout>
                  <Component />
                </DefaultLayout>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
