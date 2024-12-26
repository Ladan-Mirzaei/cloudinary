import { useState, useEffect } from "react";
import "./recipeAll.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/recipes`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Es gab ein Problem beim Abrufen der Rezepte.");
        }

        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div className="page-layout">
      <div className="right-side">
        <main className="recipe-container">
          {Array.isArray(recipes) &&
            recipes.map((recip, index) => (
              <div className="recipe-card" key={index}>
                <img
                  className="recipe-card-image"
                  src={
                    recip.image_url
                      ? recip.image_url
                      : "https://res.cloudinary.com/dxneunm1q/image/upload/v1733394868/b8pb1rxbydxlrqnmg4fg.avif"
                  }
                  alt={recip.title || "Rezeptbild"}
                />
                <div className="recipe-card-title">{recip.title} </div>
              </div>
            ))}
        </main>
      </div>
    </div>
  );
}
