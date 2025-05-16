import { createContext, useContext, useEffect, useState} from "react"
import type { Recipe } from "../types/recipeTypes"


type RecipeContextType = {
    recipes: Recipe[],
    loading: boolean,
    error: string | null,
}


const RecipeContext = createContext<RecipeContextType | null>(null)


type RecipeProviderProps = {
    children: React.ReactNode
}

export const RecipesProvider = ({children}: RecipeProviderProps) => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        const fetchRecipesFromServer = async () => {

            try {
                const URL = "https://dummyjson.com/recipes"
                const response = await fetch(URL)

                if(!response.ok) {
                    throw new Error('Something is not right with the response my man')
                }

                const data = await response.json()

                const recipes  = data.recipes

                setRecipes(recipes)

            } catch (error) {

                if (error instanceof Error) {
                    setError(error.message)
                }

            } finally {
                setLoading(false)
            }

        }

        fetchRecipesFromServer()
    },[])

    return (
        <RecipeContext.Provider value={{recipes, loading, error}}>
            {children}
        </RecipeContext.Provider>
    )
}


export const useRecipes = (): RecipeContextType => {
    const context = useContext(RecipeContext);
    if(!context) {
        throw new Error("useRecipes must be used within a recipesProvider")
    }
    return context
}