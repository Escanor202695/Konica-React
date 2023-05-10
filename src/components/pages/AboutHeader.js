import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
const AboutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    {
      title: "about us",
    },
    {
      title: "contact",
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-screen bg-transparent z-50">
      <div className="flex justify-between items-center py-4 max-w-[1140px] mx-auto bg-transparent px-[20px] md:px-0">
        <div className="flex transform scale-90">
          <Link to="/" className="hover:cursor-pointer">
            <img
              src="/img/white-logo.png"
              alt="Logo"
              className="w-16 h-16 mr-4 "
            />
          </Link>
          <Link to="/" className="hover:cursor-pointer">
            <p className="text-2xl font-bold text-themeWhite">
              <span className="text-themeGreen">K</span>onica{" "}
              <br className="block mx:hidden" />
              <span className="text-themeGreen">C</span>orporation
            </p>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <nav className="hidden md:flex space-x-8 font-semibold ml-8 mr-6">
            {menu.map((item, idx) => (
              <ScrollIntoView
                selector={`#${item.title}`}
                smooth={true}
                duration={500}
                key={idx}
              >
                <p className="text-themeWhite hover:text-themeGreen capitalize cursor-pointer menuLine">
                  {item.title !== "contact" && item.title}
                </p>
              </ScrollIntoView>
            ))}
          </nav>
          <ScrollIntoView selector="#contact" smooth={true} duration={500}>
            <button className="px-4 py-2 rounded-md text-white bg-themeGreen hover:bg-themeDarkBlue">
              Contact Us
            </button>
          </ScrollIntoView>
        </div>
        <div className="md:hidden z-40">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <MdClose className="text-themeBlue text-xl" />
            ) : (
              <FiMenu className="text-themeWhite text-3xl " />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-6 right-2 h-auto w-[10rem] bg-gray-100`}
        >
          <nav className="px-6 space-y-4 py-8">
            {menu.map((item, idx) => (
              <ScrollIntoView
                selector={`#${item.title}`}
                smooth={true}
                duration={500}
                key={idx}
              >
                <p className="text-themeBlue hover:text-themeGreen capitalize cursor-pointer">
                  {item.title}
                </p>
              </ScrollIntoView>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
