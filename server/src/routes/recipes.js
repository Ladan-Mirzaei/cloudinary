import { Router } from "express";
import { createRecipe, getRecipes } from "../controllers/recipes.js";

const router = Router();
router.post("/", createRecipe);
router.get("/", getRecipes);
export default router;
