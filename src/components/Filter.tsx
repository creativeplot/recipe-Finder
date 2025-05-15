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
        <div>
        filter options
      </div>
      )}
    </>
  )
}

export default Filter