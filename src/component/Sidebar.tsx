import { Link } from "react-router-dom";
import ReactLogo from "../assets/icons/React-icon.svg";
import JavascriptLogo from "../assets/icons/JavaScript-logo.png";
import JavaLogo from "../assets/icons/Java_logo.svg";
import SpringLogo from "../assets/icons/Spring_Logo.svg";
import HTMLLogo from "../assets/icons/HTML_Logo.svg";
import CSSLogo from "../assets/icons/CSS_Logo.svg";
import PostgreSQL from "../assets/icons/Postgresql_Logo.svg";
import Docker from "../assets/icons/docker.png";
import MongoDB from "../assets/icons/MongoDB_Logo.svg";
import NodeJS from "../assets/icons/Node.js_Logo.svg";
import Linkedin from "../assets/icons/linkedin-color-svgrepo-com.svg";
import Instagram from "../assets/icons/Instagram_logo.png";
import Github from "../assets/icons/github_logo.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Sidebar = () => {
  return (
   
    <nav className="border-2 w-full md:w-1/3 lg:w-1/4 h-auto md:h-full flex flex-col justify-between p-6 items-center bg-gradient-to-tr from-[#e8ed86] to-[#26ede3] rounded-lg shadow-md space-y-8">
      <a  className="text-lg md:text-xl font-semibold text-center flex items-center" href="mailto:alituncer847@gmail.com"><MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />alituncer847@gmail.com</a>
    <div className="flex flex-col space-y-4 text-2xl md:text-3xl font-semibold text-center mt-6 md:mt-10 p-6 w-full">
      <Link className="border-b-2  buttonLink  p-2 rounded-lg" to="">
        About
      </Link>
      <Link
        className="border-b-2  buttonLink  rounded-lg p-2"
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className="border-b-2  buttonLink  rounded-lg p-2"
        to="/contact"
      >
        Contact
      </Link>
    </div>
    <div className="grid grid-cols-4 gap-2 md:gap-3 justify-center items-center bg-[#e8ed86] p-4 border-2 rounded-2xl shadow-lg">
      <img
        src={ReactLogo}
        alt="React"
        className="w-8 md:w-10 h-8 md:h-10"
      />
      <img
        src={JavascriptLogo}
        alt="Javascript"
        className="w-8 md:w-10 h-8 md:h-10"
      />
      <img src={JavaLogo} alt="Java" className="w-8 md:w-10 h-8 md:h-10" />
      <img
        src={SpringLogo}
        alt="Spring"
        className="w-8 md:w-10 h-8 md:h-10"
      />
      <img src={HTMLLogo} alt="HTML" className="w-8 md:w-10 h-8 md:h-10" />
      <img src={CSSLogo} alt="CSS" className="w-8 md:w-10 h-8 md:h-10" />
      <img
        src={PostgreSQL}
        alt="PostgreSQL"
        className="w-8 md:w-10 h-8 md:h-10"
      />
      <img src={Docker} alt="MySQL" className="w-8 md:w-10 h-8 md:h-10" />
      <img
        src={MongoDB}
        alt="MongoDB"
        className="w-8 md:w-10 h-8 md:h-10"
      />
      <img src={NodeJS} alt="NodeJS" className="w-8 md:w-10 h-8 md:h-10" />
    </div>
    <div className="flex flex-wrap justify-around items-end bg-[#9fa5ad] p-4 space-y-4 space-x-3 md:space-y-0 rounded-lg shadow-md">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/ali-tun%C3%A7er-956a3a2b3/"
        className="flex flex-col items-center w-1/3"
      >
        <img src={Linkedin} alt="Linkedin" className="iconLink" />
        <p className="text-[12px] md:text-[15px]">Linkedin</p>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/yektun1/"
        className="flex flex-col items-center w-1/3"
      >
        <img src={Instagram} alt="Instagram" className="iconLink" />
        <p className="text-[12px] md:text-[15px]">Instagram</p>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/YEKTUN?tab=repositories"
        className="flex flex-col  items-center w-1/3 "
      >
        <img src={Github} alt="Github" className="iconLink" />
        <p className="text-[12px] md:text-[15px]">Github</p>
      </a>
    </div>
  </nav>
  )
}

export default Sidebar