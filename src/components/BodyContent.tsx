import { IoOptionsOutline } from "react-icons/io5";

const BodyContent = () => {
  return (
    <div className="border border-solid border-sky-500 flex flex-col items-center justify-center px-4">
      <div className="border border-solid border-purple-500 h-12 bg-purple-500 text-2xl w-full flex justify-between items-center px-8 cursor-pointer">
        <p>Filter</p>
        <IoOptionsOutline className="text-3xl"/>
      </div>
      <div>
        filter options
      </div>
      <div className="h-[40vh] w-full border border-solid border-indigo-600 flex flex-col">
        <div className="text-center">recipes images</div>
        <div className="text-center">recipes images</div>
        <div className="text-center">recipes images</div>
      </div>
    </div>
  )
}

export default BodyContent