import { useEffect, useState } from "react";
import { NavLink , Link} from "react-router-dom"



export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState(false);


  useEffect(() => {
    const  handleScroll = () => {
      if (window.scrollY > 300) {
        setHeader(true);
      } else {
        setHeader(false);
      }

    }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
  })

  const handleToggle = () => {
    setToggle(!toggle);
  }
  //`
  return(
    <header className={`py-4 px-7  bg-[#fff] z-50 transition-all duration-300   ${header ? 'fixed top-0 left-0 w-full shadow-md translate-y-0' : 'relative -translate-y-2 py-3'} `}>
      <div className="custom__container">
            <nav className="flex items-center justify-between">
        <Link>
        <img
        src="./images/logo.png"
        alt="logo"
        title="logo"
        className="w-32 my-4"
        />
        </Link>


        <div className={`flex items-center gap-5 z-50  ${toggle ? "show" : "max-[992px]:hidden"}`}>
          <ul className={`items-center gap-1 ${toggle ? "flex" : "flex"}`} dir="rtl">
          <li><NavLink   className={({ isActive }) => `py-4 px-6 font-semibold transition rounded-xl text-lg 
          ${ isActive ? "bg-custom-bg text-white" : "text-color-main"
         } hover:text-white hover:bg-custom-bg`} to={"/"}>الصفحة الرئيسية</NavLink></li>
          <li><NavLink className={({isActive}) => `py-4 px-6 font-semibold transition rounded-xl text-lg 
            ${isActive? "bg-custom-bg text-white" : "text-color-main"} 
            hover:text-white hover:bg-custom-bg`} 
            to={"/courses"}>الكورسات</NavLink></li>
          <li><NavLink className={({isActive}) => `py-4 px-6 font-semibold transition rounded-xl text-lg
          ${isActive? "bg-custom-bg text-white" : "text-color-main hover:bg-custom-bg"} hover:text-white`} to={"/sessions"}>الجلسات</NavLink></li>
          <li><NavLink className={({isActive}) => `py-4 px-6 font-semibold transition rounded-xl text-lg 
          ${isActive? "bg-custom-bg text-white" : "text-color-main hover:bg-custom-bg"} hover:text-white`} to={"/ourTeam"}>فريق العمل</NavLink></li>
          <li><NavLink className={({isActive}) => `py-4 px-6 font-semibold transition rounded-xl text-lg 
          ${isActive? "bg-custom-bg text-white" : "text-color-main hover:bg-custom-bg"} hover:text-white`} to={"/contact"}>اتصل بنا</NavLink></li>
        </ul>
          <button className="w-32 text-center bg-bg-main  hover:bg-[#085b92] transition-all cursor-pointer text-white rounded-xl py-3 px-5">انضم الآن</button>
        </div>

        <button className="hidden max-[992px]:block w-10 h-5 bg-white relative"
          onClick={handleToggle}>
          <span className="absolute left-0 w-full h-[3px] bg-red-500 top-0"></span>
          <span className="absolute left-0 w-full h-[3px] bg-red-500 top-2"></span>
          <span className="absolute left-0 w-full h-[3px] bg-red-500 top-4"></span>
        </button>

        

    </nav>
      </div>
    </header>
  )  
}