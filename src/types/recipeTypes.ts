

export type Recipe = {
    calories: number,
    cookTimeMinutes: number,
    cuisine: string,
    difficulty: string,
    id: number,
    image: string,
    ingredients: string[],
    instructions: string[],
    mealType: string[],
    name: string,
    prepTimeMinutes: number,
    rating: number,
    servings: number,
    tags: string[]
}