import ImagesContainer from "./ImagesContainer";
import Filter from "./Filter";

const BodyContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Filter/>
      
      <ImagesContainer/>
    </div>
  )
}

export default BodyContent