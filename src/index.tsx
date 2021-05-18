import { StrictMode } from "react";
import { render } from "react-dom";
import { Routes } from "components";
import routes from "routes";

render(
  <StrictMode>
    <Routes routes={routes} fallback="/not_found" />
  </StrictMode>,
  document.getElementById("root")
);
