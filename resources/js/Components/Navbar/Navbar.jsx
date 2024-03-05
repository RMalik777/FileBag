import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function Navbar() {
  const { url, component } = usePage();
  const [scrollY, setScrollY] = useState(0);
  const [nav, setNav] = useState(false);
  const showNav = () => {
    setNav(!nav);
    setTimeout(() => {
      if (nav == false) {
        setNav(false);
      }
    }, 30000);
    clearTimeout();
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, setScrollY]);
  return (
    <header
      className={
        "fixed w-full z-10 flex flex-row justify-between items-center px-5  transition-all duration-200 " +
        (scrollY > 100 || url !== "/" ? "bg-cimbred" : "bg-white/0")
      }>
      <div className="max-lg:hidden w-full flex flex-row gap-2 items-center justify-start">
        <img
          src="assets/logox.svg"
          alt="Filebag logo"
          className="w-1/4 max-xl:hidden pb-3"
        />
        <div className="max-lg:order-1 max-lg:self-center max-lg:w-full">
          <ul className="flex flex-row">
            <li className="text-gray-300 text-xl font-bold py-5 px-5">
              <Link
                href="/"
                className={
                  (url === "/"
                    ? scrollY > 100
                      ? "text-white"
                      : "text-white"
                    : "") +
                  " hover:text-1 hover:underline duration-200 ease-out"
                }>
                Home
              </Link>
            </li>
            <li className="text-gray-300 text-xl font-bold py-5 px-5">
              <Link
                href="/upload"
                className={
                  (url.startsWith("/upload") ? "text-white" : "") +
                  " hover:text-1 hover:underline duration-200 ease-out"
                }>
                Upload
              </Link>
            </li>
            <li className="text-gray-300 text-xl font-bold py-5 px-5">
              <Link
                href="/"
                className={
                  (url === "" ? "text-white" : "") +
                  " hover:text-1 hover:underline duration-200 ease-out"
                }>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden max-lg:order-3 lg:flex flex-col w-fit font-bold text-white items-center py-2">
        <p className="">Calvin</p>
        <p className="font-medium">Project&nbsp;Manager</p>
      </div>
      <div className="p-5 order-2 lg:hidden">
        <span
          className="material-symbols-rounded text-white text-5xl cursor-pointer"
          onClick={showNav}>
          menu
        </span>
      </div>

      <nav id="navmenu" className="block lg:hidden">
        <ul
          className={
            "sidebar h-screen fixed z-10 top-0 right-0 overflow-x-hidden pt-28 md:pt-22 duration-300 ease-out bg-cimbred " +
            (nav ? "w-full sm:w-1/3" : "w-0 shadow-none")
          }>
          <span
            className="material-symbols-rounded closebtn w-auto p-4 absolute top-0 right-0 px-3 pd:px-6 lg:px-12 xl:px-14 duration-300 ease-out text-6xl text-white hover:text-black"
            onClick={showNav}
            src=""
            alt="Close Button">
            close
          </span>
          <li className="list-none text-right w-full p-4 pr-6 sm:pl-11 text-2xl text-white font-medium inline-block md:block duration-200 ease-linear hover:underline ">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none text-right w-full p-4 pr-6 sm:pl-11 text-2xl text-white font-medium inline-block md:block duration-200 ease-linear hover:underline ">
            <Link href="/Update">Update</Link>
          </li>
          <li className="list-none text-right w-full p-4 pr-6 sm:pl-11 text-2xl text-white font-medium inline-block md:block duration-200 ease-linear hover:underline ">
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
