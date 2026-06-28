import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <Layout>
    <App />
  </Layout>,
);

initThemeMode();
