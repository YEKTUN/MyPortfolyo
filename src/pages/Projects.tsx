import Project from "../component/Project";
import { useState } from "react";
import ImageModal from "../component/ImageModal";
import {
  alishopping_images,
  mySocialMedia_images,
  myChatApp_images,
} from "../imageList";

const descriptionAlishopping="With this application, we can add the products we select to the cart. In the app, we can see features like price calculation, quantity, and total cost of the products we have put in the cart. This project was something they wanted me to do during my summer internship. It is a project open to development, and I am still working on it."
const descriptionMySocialMedia="My goal with this application was to create a social media project. I developed a classic social media platform where users can share posts with each other, give likes, and follow one another. There are still many things I will add to this project."
const descriptionMyChatApp="I wanted to create a chat application. In this application, we can take notes. We can send files, pictures, and videos. I made a chat application in the form of a notebook."

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="text-xl md:text-2xl text-black bg-[#e8ed86] min-h-full  w-full flex flex-col justify-start rounded-l-2xl items-center p-10 gap-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-24  w-full max-w-6xl">
        
        <Project
          onClick={() => {
            setSelectedProject(0);
            setModal(true);
          }}
          images={alishopping_images}
          projectName="AliShopping App"
          url="https://github.com/YEKTUN/Yaz-staj-sepet-uygulamam"
          description={descriptionAlishopping}
        />

      
        <Project
          onClick={() => {
            setSelectedProject(1);
            setModal(true);
          }}
          images={mySocialMedia_images}
          projectName="MySocialMedia App"
          url="https://github.com/YEKTUN/React-FullStack-Projects"
          description={descriptionMySocialMedia}
        />

       
        <Project
          onClick={() => {
            setSelectedProject(2);
            setModal(true);
          }}
          images={myChatApp_images}
          projectName="MyChatApp"
          url="https://github.com/YEKTUN/MyChatApp"
          description={descriptionMyChatApp}
        />
      </div>

      {modal && (
        <ImageModal selectedProject={selectedProject} setModal={setModal} />
      )}
    </div>
  );
}

export default Projects;
