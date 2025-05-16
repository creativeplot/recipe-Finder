import { IoOptionsOutline } from "react-icons/io5";
import { useState } from "react";

const Filter = () => {
    const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
    <div className="border border-solid border-purple-500 h-12 bg-purple-500 text-2xl w-full flex justify-between items-center px-8 cursor-pointer"
    onClick={() => {
        setIsOpen((open) => !open)
    }}>
        <p>Filter</p>
        <IoOptionsOutline className="text-3xl"/>
      </div>
      {isOpen && (
        <div className="border border-solid border-purple-500 w-full grid grid-cols-2 text-2xl">
            <div className="border border-solid border-purple-100 flex flex-col gap-4 pl-8">
                <label htmlFor="" className="flex items-center gap-x-2">
                <input type="checkbox" className="w-4 h-4"/>
                high-calorie
            </label>
            <label htmlFor="">
                <input type="checkbox" className="w-4 h-4"/>
                carnivore
            </label>
            <label htmlFor="">
                <input type="checkbox" className="w-4 h-4"/>
                low-carb
            </label>
            <label htmlFor="">
                <input type="checkbox" className="w-4 h-4"/>
                some-other
            </label>
            </div>

            <div className="border border-solid border-purple-700 flex flex-col pl-8 gap-4">
                <label htmlFor="">
                <input type="checkbox" />
                10-minutes
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                20-minutes
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                30-minutes
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                40-minutes
            </label>
            </div>
      </div>
      )}
    </>
  )
}

export default Filter