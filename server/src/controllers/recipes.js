import db from "../util/db-connect.js";
/**
 * @api POST /recipes
 * {
    title,
    image_url
    
 }

 */

export async function createRecipe(req, res) {
  const { title, image_url } = req.body;

  try {
    const recipeId = await db("recipe_cloud")
      .insert({
        title: title,
        image_url: image_url,
      })
      .returning("id");

    res.status(200).json(recipeId);
  } catch (error) {
    console.error("Error fetching create new recipe:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @api GET /recipes
 * @returns {Array} - Eine Liste aller Rezepte
 */
export async function getRecipes(req, res) {
  try {
    const recipes = await db("recipe_cloud").select("id", "title", "image_url");

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
