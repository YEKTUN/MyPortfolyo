import MyProfilePhoto from "../assets/icons/myProfilePhoto.jpg";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { MdInterests } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { TiArrowRightOutline } from "react-icons/ti";
import { ImYoutube } from "react-icons/im";

function About() {
  return (
    <div className="text-xl md:text-3xl text-black bg-[#e8ed86] min-h-full w-full flex justify-center rounded-l-2xl items-start p-4">
      <div className="w-full max-w-4xl">
        <h1 className="ml-1 font-semibold text-center md:text-left">About</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <img
            src={MyProfilePhoto}
            alt="MyProfilePhoto"
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] float-none md:float-left mx-auto md:mr-8 mb-4 shadow-black shadow-[5px_5px_10px_1px] rounded-2xl"
          />
          <p className="text-lg w-full">
            Hi, My name is Ali, and I am 24 years old. I am in my final year of
            Computer Engineering at Manisa Celal Bayar University. My interest
            in technology led me to choose computer engineering. Taking a break
            from the busy pace of life to create something in software has
            always been enjoyable for me. I am developing my skills as a{" "}
            <span className="font-semibold inline">
              Full-Stack Web and Mobile Developer
            </span>
            , focusing on{" "}
            <span className="font-semibold inline">
              React, Spring Boot, JavaScript, and Java.
            </span>{" "}
            Outside of technology, I am also working on my personal development
            in social life. I believe I have improved my communication and
            social skills. Even though I am just starting my journey, I am
            confident that I will achieve great things in the future.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full justify-around gap-4 mt-8">
         
          <div className="flex flex-col flex-1">
            <h3 className="border-b-2 border-black flex justify-start gap-1 items-center">
              <FaGraduationCap />
              Education
            </h3>
            <p className="text-sm flex">
              <p className="font-semibold text-md">
                Manisa Celal Bayar University
              </p>
              I am in my final year of Computer Engineering.
            </p>
          </div>
         
          <div className="flex flex-col flex-1">
            <h3 className="border-b-2 border-black flex justify-start gap-1 items-center">
              <FaBriefcase />
              Experience
            </h3>
            <p className="text-sm flex">
              <p className="font-semibold text-md">HUGIN Payment Systems</p>
              Junior Software Developer as Intern in Istanbul.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full justify-around gap-4 mt-8">
          
          <div className="flex flex-col flex-1">
            <h3 className="border-b-2 border-black flex justify-start gap-1 items-center">
              <MdInterests />
              Interests
            </h3>
            <p className="text-sm flex flex-col">
              <span className="font-semibold text-md flex justify-start gap-6 items-center">
                I produce podcasts for my Youtube Channel
                <TiArrowRightOutline size={"1em"} color="black" />
                <a href="https://www.youtube.com/@Yektunn" target="_blank">
                  <ImYoutube size={"1.5em"} color="red" />
                </a>
              </span>
              <span className="font-semibold text-md flex justify-start gap-6 items-center">
                I have been Latin dancing for 3 years (Bachata, Salsa...)
              </span>
              <span className="font-semibold text-md flex justify-start gap-6 items-center">
                I have been doing calisthenics for 6 months
              </span>
            </p>
          </div>
          
          <div className="flex flex-col flex-1">
            <h3 className="border-b-2 border-black flex justify-start gap-1 items-center">
              <MdLanguage />
              Languages
            </h3>
            <p className="text-sm flex gap-2">
              <span className="font-semibold text-md">English</span>
              Second Language - Basic Conversational Level
            </p>
            <p className="text-sm flex gap-2">
              <span className="font-semibold text-md">Turkish</span>
              Native Language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
