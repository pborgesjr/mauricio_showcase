import React from "react";
import { LinkAggregator } from "../../components";

export const Home = () => {
  return (
    <div>
      <LinkAggregator
        shouldUnderline
        paths={["home", "sobre", "projetos", "contato"]}
      />
    </div>
  );
};
