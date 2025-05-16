import catNoStress from "../assets/No-stress.avif"
import { useRecipes } from "../context/RecipesContext"

const ImagesContainer = () => {

  const { recipes, loading, error } = useRecipes()

  console.log(recipes)

  return (
    <div className="mt-8 min-h-[40vh] w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] gap-4">
      {recipes.map((recipe) => (
        <figure key={recipe.id}>
        <img src={recipe.image} alt='Place-holder' />
      </figure>
      ))}
      </div>
  )
}

export default ImagesContainer