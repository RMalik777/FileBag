import React,{useState, useEffect} from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, setScrollY]);
  return (
      <nav className={"fixed w-full z-10 flex flex-row justify-between items-center px-5 bg-cimbred transition-all duration-200" + (scrollY > 100 ? " shadow-sm " : " bg-white/0 shadow-none ")}>
        <div className="max-lg:order-1 max-lg:self-center max-lg:w-full">
          <h1 className="text-white text-3xl lg:text-4xl font-bold py-5 px-5">
            Dashboard
          </h1>
        </div>
        <div className="max-lg:hidden">
          <img src="assets/logox.svg" alt="" />
        </div>
        <div className="hidden max-lg:order-3 lg:flex flex-col font-bold text-white items-center">
          <img
            src="assets/user_photo.svg"
            alt="Profile"
            className="profile-pic"
          />
          <p>Hello, Calvin!</p>
          <p>Project Manager</p>
        </div>
        <div className="p-5 order-2 lg:hidden">
          <span className="material-symbols-rounded text-white text-5xl">menu</span>
        </div>
      </nav>
  );
}
