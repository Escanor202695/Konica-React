import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ScrollIntoView from "react-scroll-into-view";

function Footer(props) {
  const menu = [
    {
      title: "about",
    },
    {
      title: "services",
    },
    {
      title: "products",
    },
    {
      title: "clients",
    },
  ];
  return (
    <div className="w-screen bg-gradient-to-tr from-black to-themeBlue px-[20px] h-[950px]">
      <div className="max-w-[1140px] mx-auto py-[80px] flex flex-col md:flex-row justify-around">
        <div>
          <img
            src="/img/white-logo.png"
            alt="Logo"
            className="w-20 h-20 mb-4"
          />

          <div className="text-3xl font-bold text-themeWhite mb-2">
            <span className="text-themeGreen">K</span>onica{" "}
            <span className="text-themeGreen">C</span>orporation
          </div>
          <p className="text-gray-400">All rights reserved by Konica Corporation Limited, 2023</p>
        </div>
        <div className="my-10">
          <h2 className="text-white text-3xl">Contacts</h2>
          <div className="mt-2">
            <p className="flex gap-2 my-4 items-center">
              <HiOutlineMail className="text-themeGreen text-[20px]" />
              <span className="text-themeWhite">sakib@gmail.com</span>
            </p>
            <p className="flex gap-2 my-4">
              <LocalPhoneIcon className="text-themeGreen text-[20px]" />
              <span className="text-themeWhite">+01812311888</span>
            </p>
            <p className="flex gap-2 my-4">
              <HiOutlineLocationMarker className="text-themeGreen text-[20px]" />
              <span className="text-themeWhite">sakib@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="text-white text-3xl">Company</h2>
          <div className="mt-2">
            <nav className="flex flex-col font-semibold">
              {menu.map((item, idx) => (
                <ScrollIntoView
                  selector={`#${item.title}`}
                  smooth={true}
                  duration={500}
                  key={idx}
                >
                  <p className="text-themeWhite hover:text-themeGreen capitalize cursor-pointer my-1 font-normal">
                    {item.title}
                  </p>
                </ScrollIntoView>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
