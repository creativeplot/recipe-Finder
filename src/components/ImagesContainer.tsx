import { useRecipes } from "../context/RecipesContext"
import { useState, useRef, useEffect } from "react"
import LazyLoadingImages from "./LazyLoadingImages"


const ImagesContainer = () => {

  const { recipes, loading, error } = useRecipes()

  // handle the api loading


  console.log(recipes)
  
      return (
          <div className="mt-8 min-h-[40vh] w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] gap-4">
            {loading && <div className="min-h-[40vh] flex items-center justify-center col-[1_/_-1] bg-gray-100">
                  <div className="w-6 h-6 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div> }
            {recipes.map((recipe) => (
                      <LazyLoadingImages
                          key={recipe.id}
                          src={recipe.image}
                          alt={recipe.name} />
                  ))}
                  {
                    error && <div className="min-h-[40vh] flex items-center justify-center col-[1_/_-1] bg-gray-100">
                        <h1 className="text-center text-3xl">{error}</h1>
                    </div>
                  }
          </div>
      )
}

export default ImagesContainer

/*

 */