import { Link } from "react-router-dom";
import { styles } from "../style";
import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const[toggle, setToggle] = useState(false);
  
  return (
    <nav className={`${styles.paddingX} py-5 
         bg-primary  top-0 fixed w-full flex items-center z-20`}     
    >
      <div className="w-full flex  justify-between max-w-7xl mx-auto items-center">
        <Link to="/" className="flex items-center gap-2"
              onClick={()=>{
                setActive("")
                window.scrollTo(0, 0)
              }}
        > 
        <img className="w-10 h-10 object-contain rounded-full hover:rounded" src="/logo-color.png" alt="logo"/>
        <p className="font-bold text-[18px] text-white cursor-pointer ">
          Amal <span className="sm:block hidden">| FrontEnd Developer </span>
        </p>

        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10  ">
          {navLinks.map((link)=> (
            <li key={link.id} 
                className={`${active === link.title? "text-white": "text-secondary"}
                          hover:text-[18px] text-white cursor-pointer font-medium`}
                onClick={()=> setActive(link.title)}      
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )  
          )}
        </ul>

        {/*for mobile  */}
        <div className="sm:hidden flex justify-end items-center">
          <img src={toggle? close: menu} className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>
          <div className={!toggle? "hidden": "flex black-gradient justify-end items-start p-6 top-20 right-0 z-10 rounded-xl min-w-[140px] absolute mx-4 my-2"}>
              <ul className=" list-none flex flex-col gap-4">
              {navLinks.map((link)=> (
                <li key={link.id} 
                    className={`${active === link.title? "text-white": "text-secondary"}
                              font-poppins text-[18px] cursor-pointer font-medium`}
                    onClick={()=> {
                      setToggle(!toggle)
                          setActive(link.title);
                        }}      
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )  
              )}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
