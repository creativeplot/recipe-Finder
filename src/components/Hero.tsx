import HeroImg from "../assets/party-sized-bibimbap-b8rnqk1t722t95lv.jpg"
import { IoSearch } from "react-icons/io5";
import { useRecipes } from "../context/useRecipes";
import { useState } from "react";

// next step is to make the search bar work by selecting the recipes by name
// so to make it happen i need to add a new search type on RecipeContextType
// then i need to create a useState with the search
// then i pass it down to this component here
// i use onChange in input to get the name that is being passed
// in the url if there is a search query i render only the search if there is not the default search query will be on place
// But maybe i will work on it later because i want to build my portfolio

const Hero = () => {

  const { setSearchValue } = useRecipes()

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(inputValue === '') {return}
    setSearchValue(inputValue)
    setInputValue('')
  }

  const handleClick = () => {
    if(inputValue === '') {return}
    setSearchValue(inputValue)
    setInputValue('')
  }

  return (
    <div className="flex flex-col">
    <figure className="h-[50vh] lg:h-[70vh] flex justify-center">
      <img 
      src={HeroImg} 
      alt="Food-With-Eggs" 
      className="object-cover h-full max-h-full w-full lg:max-w-[85vw] xl:max-w-[75vw]"
      />
    </figure>
    
    <div className="py-8 px-4">
    <h1 className="text-3xl lg:text-4xl font-bold text-center">Recipe Finder</h1>

      <form
          className="w-full flex justify-center mt-4"
          onSubmit={(e) => {
            handleSubmit(e)
          }}>
      <div className="border border-solid border-black flex items-center text-xl w-full md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]">
        <input 
        type="text" 
        placeholder="Search by recipe name"
        className="w-full h-12 indent-3 font-medium"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        />
        <IoSearch 
        className="text-3xl cursor-pointer"
        onClick={handleClick}/>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Hero