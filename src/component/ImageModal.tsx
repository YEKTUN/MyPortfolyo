import {
  alishopping_images,
  mySocialMedia_images,
  myChatApp_images,
} from "../imageList";
import Slider from "./Slider";
import { GiSplitCross } from "react-icons/gi";

interface Props {
  selectedProject: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImageModal: React.FC<Props> = ({ selectedProject, setModal }) => {
  const handleImage = () => {
    if (selectedProject === 0) {
      return alishopping_images;
    } else if (selectedProject === 1) {
      return mySocialMedia_images;
    } else if (selectedProject === 2) {
      return myChatApp_images;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 ">
      <GiSplitCross
        className="absolute top-10 right-10 cursor-pointer text-red-200 hover:text-red-500 active:text-red-300"
        size={"2em"}
        onClick={() => setModal(false)}
      />

      <div className="w-[500px] md:w-[700px] h-[600px] bg-gray-200  p-4 rounded-3xl">
        <Slider
          images={handleImage() || []}
          width={"500px"}
          height={"500px"}
          width2="100px"
          height2="500px"
        />
      </div>
    </div>
  );
};

export default ImageModal;
