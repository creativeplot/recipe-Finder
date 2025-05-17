import { useRecipes } from "../context/RecipesContext"
import { useState, useRef, useEffect } from "react"
import LazyLoadingImages from "./LazyLoadingImages"

const ImagesContainer = () => {

  const { recipes, loading, error } = useRecipes()
  
      const [isVisible, setIsVisible] = useState(false)

      const imgRef = useRef(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              entries => {
                  entries.forEach(entry => {
                      if(entry.isIntersecting) {
                          setIsVisible(true)
                          observer.disconnect()
                      }
                  })
              },
              { threshold: 0.1}
          );
  
          if(imgRef.current) {
              observer.observe(imgRef.current)
          }
  
          return () => {
              if(imgRef.current) { observer.unobserve(imgRef.current)}
          }
       },[])
  
      return (
          <div className="mt-8 min-h-[40vh] w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] gap-4">
              {recipes.map((recipe) => (
                <LazyLoadingImages key={recipe.id} src={recipe.image} alt={'randomImage'}/>
              ))}
          </div>
      )
}

export default ImagesContainer