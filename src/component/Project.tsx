import Slider from "./Slider";
import { FaArrowRightToBracket } from "react-icons/fa6";

interface Props {
  projectName: string;
  images: string[];
  description: string;
  url: string;
  onClick?: () => void;
}

const Project: React.FC<Props> = ({
  projectName,
  images,
  description,
  url,
  onClick,
}) => {
  return (
    <div className="flex flex-col  justify-start items-start md:items-center border-b-2  border-dashed border-black pb-4 md:pb-6 gap-4">
      
      <div className="w-full md:w-[400px]mr-4  ">
        <div className="">
          <p className="border-b-2 border-black mb-2 text-lg md:text-xl font-semibold text-center md:text-left">
            {projectName}
          </p>
          <Slider
            onClick={onClick}
            images={images}
            width="170px"
            height="170px"
            width2="100px"
            height2="200px"
          />
        </div>
      </div>

     
      <div className="flex flex-col items-start md:items-center justify-between  h-[250px]  w-full md:w-[500px] gap-4 md:gap-6">
        <p className="text-sm md:text-base text-justify w-[350px] ">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dignissimos perferendis modi ratione asperiores nisi labore placeat soluta iusto optio?"}
        </p>
        <div className="flex items-center gap-2 ">
          <p className="font-semibold text-sm md:text-base">Source Code --</p>
          <a
            href={url || "https://github.com/YEKTUN/Yaz-staj-sepet-uygulamam"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 md:mt-2"
          >
            <FaArrowRightToBracket size={"1em"} color="darkgray" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
