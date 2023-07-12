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
                <div>
                  <p className=" mb-0">
                    <a href="mailto:info@konicacorporation.com">
                      info@konicacorporation.com
                    </a>
                  </p>
                  <p className=" mb-0">
                    <a href="mailto:konicacorporationd@gmail.com">
                      konicacorporationd@gmail.com
                    </a>
                  </p>
                </div>
              </span>
            </p>
            <p className="flex gap-2 my-4">
              <LocalPhoneIcon className="text-themeGreen text-[22px]" />
              <div>
                <a href="tel:+8801716161730" className="text-themeWhite">
                  +88-01716 161730
                </a>
                <br />
                <a href="tel:+8801715617463" className="text-themeWhite">
                  +88-01715 617463
                </a>
              </div>
            </p>
            <p className="flex gap-2 my-4">
              <HiOutlineLocationMarker className="text-themeGreen text-[20px]" />
              <div className="flex flex-col gap-4">
                <p className="text-themeWhite">
                  Local Address: House-718, Road-4, Block-B, Ajmeribag <br />
                  Fatulla, Narayanganj-1400
                </p>
                <p className="text-themeWhite">
                  Head Office: Flat-2A, House-1017, Road-17, Adabor, Dhaka
                </p>
              </div>
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
