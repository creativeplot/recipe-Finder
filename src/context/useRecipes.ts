import { useContext } from "react";
import { RecipeContext } from "./RecipesContext";
import type { RecipeContextType } from "./RecipesContext";


export const useRecipes = (): RecipeContextType => {

    const context = useContext(RecipeContext);
    if(!context) {
        throw new Error("useRecipes must be used within a recipesProvider")
    }
    return context
}