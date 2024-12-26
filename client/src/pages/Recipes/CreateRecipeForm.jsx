import RecipeForm from "../../components/Recipe/recipeForm.jsx";
import { useState } from "react";
import recipeAll from "./recipeAll";
import { useNavigate } from "react-router-dom";

export default function CreateRecipeForm() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [recipeID, setRecipeID] = useState();
  const navigate = useNavigate();

  const onFormSubmit = async (finalData) => {
    try {
      const response = await fetch(`${API_URL}/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...finalData }),
      });
      if (!response.ok) {
        console.log("Data fetching error");
      }
      const recipeId = await response.json();
      setRecipeID(recipeId);
      navigate("/recipeAll");
      console.debug("Recipe - onFormSubmit: ", { recipeId });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="personal-container">
        <h2>
          ein Bild von einer React-Anwendung zu Cloudinary hochladen und
          speichern
        </h2>
        <RecipeForm onFormSubmit={onFormSubmit} recipeID={recipeID} />
      </div>
    </>
  );
}
