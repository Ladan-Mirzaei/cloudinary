import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeAll from "./pages/Recipes/recipeAll.jsx";
import RecipeForm from "./pages/Recipes/CreateRecipeForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecipeForm />,
      },
      {
        path: "/recipeform",
        element: <RecipeForm />,
      },
      {
        path: "/recipeAll",
        element: <RecipeAll />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
