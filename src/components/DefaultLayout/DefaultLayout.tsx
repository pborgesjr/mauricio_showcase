import React from "react";
import { Footer, Header } from "..";
import { routes } from "../../routes";

interface RouteProps {
  children: JSX.Element;
}

export const DefaultLayout = ({ children }: RouteProps) => {
  return (
    <>
      <Header links={routes} shouldUnderline />
      {children}
      <Footer shouldUnderline />
    </>
  );
};
