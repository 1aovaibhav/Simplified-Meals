import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../context/useAuth.js';
import { logoutUser } from '../api/user.js';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
    const { auth, isAuthenticated, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false)

  const userName = auth?.user?.name?.split(" ")[0] || "";
  
  const handleScroll = () => {
    
    if (window.scrollY > 30) {
      setIsScrolled(true);
  
    } else {
      setIsScrolled(false);
 
    }
  };

  window.addEventListener("scroll", handleScroll)
 
  const handleLogout = async () => {
  
    let res = await logoutUser(auth?.user?._id);
    if(res && res.success){
      logout();
    }
  }

    return (
  <div
    className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
    }`}
  >
    <div className="w-[90%] md:w-[80%] flex justify-between items-center py-4 mx-auto">
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex flex-wrap justify-center items-center text-[1.7rem] gap-2">
          <div className="flex justify-center items-center">
            <span
              className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]"
              style={{ fontFamily: "Jokerman" }}
            >
              S
            </span>
            <p
              className="text-2xl text-[#fea116] font-bold [text-shadow:5px_5px_5px_#0000003d]"
              style={{ fontFamily: "cursive" }}
            >
              implified
            </p>
          </div>
          <div className="flex justify-center items-center">
            <span
              className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]"
              style={{ fontFamily: "Jokerman" }}
            >
              M
            </span>
            <p
              className="text-2xl text-[#fea116] font-bold [text-shadow:5px_5px_5px_#0000003d]"
              style={{ fontFamily: "cursive" }}
            >
              eals
            </p>
          </div>
        </div>
      </Link>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden flex flex-col gap-1.5 text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-10">
        <HashLink
          smooth
          to="/#home"
          className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
        >
          Home
        </HashLink>
        <HashLink
          smooth
          to="/#menu"
          className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
        >
          Menu
        </HashLink>
        <Link to={"/v1/messes"}>
          <p className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300">
            Messes
          </p>
        </Link>
        <HashLink
          smooth
          to="/#contactus"
          className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
        >
          Contact Us
        </HashLink>
      </div>

      {/* Auth Section */}
      <div className="hidden md:flex justify-center items-center gap-4">
        {isAuthenticated ? (
          <div className="flex justify-center items-center gap-4">
            <span className="text-white text-base md:text-lg">Hello, {userName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm md:text-base"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <Link to={"/login"}>
              <button
                className="relative h-[40px] w-[110px] sm:w-[120px] text-[0.9rem] sm:text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl
                transition-all duration-200
                before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                before:transition-all before:duration-600
                hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]"
              >
                User LogIn
              </button>
            </Link>
            <Link to={"/loginmess"}>
              <button
                className="relative h-[40px] w-[110px] sm:w-[120px] text-[0.9rem] sm:text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl
                transition-all duration-200
                before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                before:transition-all before:duration-600
                hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]"
              >
                Mess LogIn
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300">
          <HashLink
            smooth
            to="/#home"
            className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#menu"
            className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </HashLink>
          <Link to={"/v1/messes"} onClick={() => setMenuOpen(false)}>
            <p className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300">
              Messes
            </p>
          </Link>
          <HashLink
            smooth
            to="/#contactus"
            className="font-heading font-medium text-lg text-amber-50 hover:text-[#fea116] transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </HashLink>

          {isAuthenticated ? (
            <div className="flex flex-col items-center gap-3">
              <span className="text-white text-base">Hello, {userName}</span>
              <button
                onClick={() => {
                  logout()
                  setMenuOpen(false)
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <Link to={"/login"} onClick={() => setMenuOpen(false)}>
                <button
                  className="relative h-[40px] w-[120px] text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl
                  transition-all duration-200
                  before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                  before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                  before:transition-all before:duration-600
                  hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]"
                >
                  User LogIn
                </button>
              </Link>
              <Link to={"/loginmess"} onClick={() => setMenuOpen(false)}>
                <button
                  className="relative h-[40px] w-[120px] text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl 
                  transition-all duration-200
                  before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                  before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                  before:transition-all before:duration-600
                  hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]"
                >
                  Mess LogIn
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
)


}

export default Navbar