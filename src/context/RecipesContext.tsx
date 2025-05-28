import { createContext, useContext, useEffect, useState, } from "react"
import type {Dispatch, SetStateAction} from "react"
import type { Recipe } from "../types/recipeTypes"
import type { Filters } from "../types/filterTypes"
import { initialFilters } from "../types/filterTypes"

// i createad the filtertypes that will store that values that i select from the filters.
// now i need a way to implente the filtersTypes here

export type RecipeContextType = {
    recipes: Recipe[],
    loading: boolean,
    error: string | null,
    currentPage: number,
    setSkipPages: Dispatch<SetStateAction<number>>,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    /*  */
    filters: Filters,
    toggleFilter: (category: keyof Filters, value:string) => void, 
    // i type for a function inside the provider
}


export const RecipeContext = createContext<RecipeContextType | null>(null)


type RecipeProviderProps = {
    children: React.ReactNode
}

export const RecipesProvider = ({children}: RecipeProviderProps) => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [skipPages, setSkipPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [filters, setFilters] = useState<Filters>(initialFilters)

    const limitPages = 10;

    /* category: keyof Filters: Accepts a key from the Filters type (i.e., "mealType" | "cuisine" | "difficulty").

    value: string: The value you want to toggle (e.g., "Vegetarian" or "Asian"). 
    */
    const toggleFilter = (category: keyof Filters, value: string) => {

        // setFilter receives the current state prev.
        setFilters((prev) => {
            const current = prev[category] ?? []
            // Check if the value is already selected
            // prev[category] accesses the array of the selected values in the given category.
            // includes(value) checks if the clicked value is already selected.
            const selected = current.includes(value)

            // Add or Remove the Value
            // if selected is true Remove it using filter.
            const updated = selected // ←  use **current** here
                ? current.filter(item => item !== value)
                : [...current, value]; // if not Add it using the spread operator.
            return { ...prev, [category]: updated} // Spread prev to keep the rest of the filter values unchanged.
            // Update only the category passed in with the new list.
        })

        // reseting the pages when a filter is selected
        setSkipPages(0)
        setCurrentPage(1)
    }


    useEffect(() => {

        const fetchRecipesFromServer = async () => {

            setLoading(true)
            // now i am having a problem that when i select breakfast lunch etc it only selects the recipes that are already displayed with those values instead of get the recipes from the server, i think the problem is how the url is set up i need to change that next time 
            try {

                /* build a query string the API will understand
                   (dummyjson lets you filter by meal type out
                   of the box, everything else we’ll filter on
                   the client side) */
                const params = new URLSearchParams({
                    limit: String(limitPages),
                    skip: String(skipPages)
                }) 

                /* if(filters.mealType.length) {
                    // dummyjson endpoint: /recipes/meal-type/{meal}
                    // but it only handles ONE meal at a time, so we
                    // just send the first selected one
                    params.set('meal-type', filters.mealType[0])
                } */

                const mealType = filters.mealType.length ? '/meal-type/' + filters.mealType[0] + '?' : '?';

                const URL = `https://dummyjson.com/recipes${mealType}${params}`
                console.log("Fetching:", URL);  
                const response = await fetch(URL)

                if(!response.ok) {
                    throw new Error('Server is not happy, my man')
                }

                const data = await response.json()
                console.log(data)

                // const recipes  = data.recipes
                let list: Recipe[] = data.recipes

                list = list.filter((r) => {
                    const mealOk =
                        !filters.mealType.length ||
                        filters.mealType.some((m) => r.mealType.includes(m));
                    const cuisineOk =
                        !filters.cuisine.length || filters.cuisine.includes(r.cuisine);
                    const difficultyOk =
                        !filters.difficulty.length ||
                        filters.difficulty.includes(r.difficulty);
                    return mealOk && cuisineOk && difficultyOk;
                });

                setRecipes(list)

            } catch (error) {

                if (error instanceof Error) {
                    setError(error.message)
                }
                setLoading(false)

            } finally {
                setLoading(false)
            }

        }

        fetchRecipesFromServer()
    },[skipPages, filters])

    return (
        <RecipeContext.Provider value={{recipes, loading, error, currentPage, setSkipPages, setCurrentPage, filters, toggleFilter}}>
            {children}
        </RecipeContext.Provider>
    )
}


/* export const useRecipes = (): RecipeContextType => {
    const context = useContext(RecipeContext);
    if(!context) {
        throw new Error("useRecipes must be used within a recipesProvider")
    }
    return context
} */