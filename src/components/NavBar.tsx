import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="border border-solid border-black w-full flex justify-between items-center px-4 py-4">
        <nav className="border border-solid border-black flex w-full">
            <div className="border border-solid border-black flex items-center text-3xl">
                <h1 className="font-bold">Cooking</h1>
            </div>
            <div className="flex max-sm:hidden">
                <p>Recipes</p>
                <p>Ingredients</p>
                <p>Best-Chefs</p>
                <p>About</p>
            </div>
            <div className="border border-solid border-black flex items-center max-sm:flex-1 max-sm:justify-end sm:hidden">
            <button className="border border-solid border-green-300 text-5xl">
                <IoMenu/>
            </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar