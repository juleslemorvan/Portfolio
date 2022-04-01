import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#18181B] h-[50px] w-full flex justify-center items-center text-white py-[50px]">
      <div>
        Designed by @JulesLeMorvan with
        <span className="font-bold"> NextJS</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
