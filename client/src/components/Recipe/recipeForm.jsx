import "./recipeForm.css";
import { useState } from "react";
import UploadImage from "../UploadImage/index.jsx";

export default function Recipe({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
  });

  const [imgUrl, setImgUrl] = useState();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      image_url: imgUrl,
    };
    onFormSubmit(finalData);
  };

  return (
    <div className="recipeform-container">
      <form id="recipeForm" onSubmit={handleSubmit}>
        <label htmlFor="recipeName">Rezeptname*</label>
        <input
          placeholder="Wie heißt dein Rezept? "
          type="text"
          id="recipeName"
          name="title"
          className="recipeform-input-field"
          value={formData.title}
          onChange={handleFormChange}
          required
        />

        <span>Stunden</span>

        <div className="recipeform-uploadImage">
          <UploadImage setImageUrl={setImgUrl} />
        </div>
        <button type="submit" className="recipeform-btn-submit">
          Rezept hinzufügen
        </button>
      </form>
    </div>
  );
}
