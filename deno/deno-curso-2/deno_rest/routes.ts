import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {getRecips, createRecipe} from "./controllers/RecipeController.ts";

const router = new Router();

router.get("/recips", getRecips).post("/recips", createRecipe);


export default router;
