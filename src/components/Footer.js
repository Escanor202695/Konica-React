import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ScrollIntoView from "react-scroll-into-view";

function Footer({ home = false }) {
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
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen bg-gradient-to-tr from-black to-themeBlue px-[20px] h-[950px] md:h-auto">
      <div className="max-w-[1140px] mx-auto py-[80px] md:py-[100px] flex flex-col md:flex-row justify-around">
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
          <p className="text-gray-400">
            All rights reserved by Konica Corporation Limited, {currentYear}
          </p>
        </div>
        <div className="my-10 md:my-0">
          <h2 className="text-white text-3xl">Contact</h2>
          <div className="mt-2">
            <p className="flex gap-2 my-4 items-center">
              <HiOutlineMail className="text-themeGreen text-[22px]" />
              <span className="text-themeWhite">
                info@konicacorporation.com
              </span>
            </p>
            <p className="flex gap-2 my-4">
              <LocalPhoneIcon className="text-themeGreen text-[20px]" />
              <span className="text-themeWhite">
                +88-01716 161730
                <br /> +88-01715 617463
              </span>
            </p>
            <p className="flex gap-2 my-4">
              <HiOutlineLocationMarker className="text-themeGreen text-[20px]" />
              <span className="text-themeWhite">
                House-18, Road-4, Block-B, Ajmeribag <br />
                Fatulla, Narayanganj-1400, Bangladesh
              </span>
            </p>
          </div>
        </div>
        {home && (
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
        )}
      </div>
    </div>
  );
}

export default Footer;
