import { createContext, useContext, useEffect, useState} from "react"
import type { Recipe } from "../types/recipeTypes"


type RecipeContextType = {
    recipes: Recipe[],
    loading: boolean,
    error: string | null,
    skipPages: number,
    currentPage: number
}


const RecipeContext = createContext<RecipeContextType | null>(null)


type RecipeProviderProps = {
    children: React.ReactNode
}

export const RecipesProvider = ({children}: RecipeProviderProps) => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [skipPages, setSkipPages] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    const limitPages = 4

    useEffect(() => {

        // i need to make pagination
        // to make that happen i limit the page numbers
        // then i attach skipPages with a fixed numbers to my buttons
        // then i figure a way to use currentPage in my code to sinalize that i am in the first page so i can disable the go back button
        // use chat gpt for reference

        const fetchRecipesFromServer = async () => {

            try {
                const URL = `https://dummyjson.com/recipes?limit=${limitPages}&skip=${skipPages}`
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
        <RecipeContext.Provider value={{recipes, loading, error, skipPages, currentPage}}>
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