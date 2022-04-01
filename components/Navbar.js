import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const defaultClassname =
  "mx-6 cursor-pointer hover:border-b-2 border-white duration-200";
const variantClassName = `text-2xl py-6 ${defaultClassname}`;

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full h-[90px] bg-[#18181B] ">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="">
          <h1 className="text-white text-2xl">JLM</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex text-white ">
            <Link href="/" title="Accueil">
              <li className={defaultClassname}>Accueil</li>
            </Link>
            <Link href="/about" title="About-me">
              <li className={defaultClassname}>About-me</li>
            </Link>
            <Link href="/skills" title="Skills">
              <li className={defaultClassname}>Skills</li>
            </Link>
            <Link href="/projects" title="Projects">
              <li className={defaultClassname}>Projects</li>
            </Link>
            <Link href="/contact" title="Contact">
              <li className={defaultClassname}>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              className="text-white cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={30}
              className="text-white cursor-pointer"
            />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%] md:hidden"
          }
        >
          <ul>
            <Link href="/" title="Accueil">
              <li className={variantClassName}>Accueil</li>
            </Link>
            <Link href="/about" title="About-me">
              <li className={variantClassName}>About-me</li>
            </Link>
            <Link href="/skills" title="Skills">
              <li className={variantClassName}>Skills</li>
            </Link>
            <Link href="/projects" title="Projects">
              <li className={variantClassName}>Projects</li>
            </Link>
            <Link href="/contact" title="Contact">
              <li className="mx-6 cursor-pointer text-2xl py-7 mb-4">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
