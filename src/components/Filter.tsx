import { IoOptionsOutline } from "react-icons/io5";
import { useState } from "react";
import { filterMenu } from "../dataUltis/data";

const Filter = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    

  return (
    <>
    <div className="border border-solid border-purple-500 h-12 bg-purple-500 text-2xl w-full flex justify-between items-center px-8 cursor-pointer md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]"
    onClick={() => {
        setIsOpen((open) => !open)
    }}>
        <p>Filter</p>
        <IoOptionsOutline className="text-3xl"/>
      </div>
      {isOpen && (
        <div className="border border-solid border-purple-500 w-full sm:grid sm:grid-cols-3 text-2xl md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]">
          {filterMenu.map((item, i) => (
            <div key={i}>
              <h1 className="pl-12 text-emerald-500 max-sm:p-4">{item.heading}</h1>
              {item.choices.map((choice) => (
                <div key={choice} className="border border-solid border-purple-100 flex flex-col gap-4 pl-8">
                <label htmlFor={choice} className="flex items-center gap-x-2">
                  <input 
                  type="checkbox"
                  id={choice}
                  className="w-4 h-4 cursor-pointer"/>
                  {choice}
                </label>
            </div>
              ))}
            </div>
          ))}
      </div>
      )}
    </>
  )
}

export default Filter