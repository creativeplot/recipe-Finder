import { useRecipes } from "../context/useRecipes"
import LazyLoadingImages from "./LazyLoadingImages"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



const ImagesContainer = () => {

  const { recipes, loading, error, currentPage, setSkipPages, setCurrentPage } = useRecipes()

  // handle the api loading

  const handleNextButton = () => {
    
    if(currentPage === 5) {
        return
    }

    setCurrentPage((current) => current + 1)
    setSkipPages((skip) => skip + 10)

  } 

  const handlePreviousButtton = () => {

    if(currentPage === 1) {return}

    setSkipPages((skip) => skip - 10)

    setCurrentPage((current) => current - 1)
  }
  
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
            {recipes && <div className="min-h-16 col-[1_/_-1] flex items-center justify-around lg:justify-center lg:gap-x-16 mt-16">
            <button className="w-20 h-8 rounded-full flex justify-center items-center text-white text-2xl bg-emerald-400 cursor-pointer"
            onClick={handlePreviousButtton}>
                <FaArrowLeft/>
            </button>
            <button className="w-20 h-8 rounded-full flex justify-center items-center text-white text-2xl bg-emerald-400 cursor-pointer"
            onClick={handleNextButton}>
                <FaArrowRight/>
            </button>
            </div> }
                  {
                    error && <div className="min-h-[40vh] flex items-center justify-center col-[1_/_-1] bg-gray-100">
                        <h1 className="text-center text-3xl">{error}</h1>
                    </div>
                  }
          </div>
      )
}

export default ImagesContainer