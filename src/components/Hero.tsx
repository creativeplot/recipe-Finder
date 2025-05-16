import HeroImg from "../assets/party-sized-bibimbap-b8rnqk1t722t95lv.jpg"
import { IoSearch } from "react-icons/io5";


const Hero = () => {
  return (
    <div className="flex flex-col">
    <figure className="h-[50vh] lg:h-[74vh] flex justify-center">
      <img 
      src={HeroImg} 
      alt="Food-With-Eggs" 
      className="object-cover h-full max-h-full w-full lg:max-w-[85vw] xl:max-w-[75vw]"
      />
    </figure>
    
    <div className="border border-solid border-red-400 py-8 px-4">
    <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>

    <form className="border border-solid border-black w-full">
      <div className="border border-solid border-black flex items-center text-xl">
        <input 
        type="text" 
        placeholder="Search By Ingredient" 
        className="w-full h-12 indent-3 font-medium"
        />
        <IoSearch className="text-3xl cursor-pointer"/>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Hero