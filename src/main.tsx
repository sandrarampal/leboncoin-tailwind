import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/provider/DarkModeProvider.tsx";
import { FavoritesProvider } from "./context/provider/FavoritesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </DarkModeProvider>
  </StrictMode>,
);
