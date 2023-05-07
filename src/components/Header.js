import { useState } from "react";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    {
      title: "clients",
    },
    {
      title: "clients",
    },
    {
      title: "clients",
    },
    {
      title: "clients",
    },
  ];

  return (
    <div className="w-screen bg-transparent">
      <div className="flex justify-between items-center py-4 max-w-[1140px] mx-auto bg-transparent">
        <div className="flex items-center">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="flex items-center gap-5"
          >
            <img src="/img/white-logo.png" alt="Logo" className=" w-16 h-16" />

            <span className="text-2xl font-bold text-themeWhite">
              <span className="text-themeGreen">K</span>onica{" "}
              <span className="text-themeGreen">C</span>orporation
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <nav className="hidden md:flex space-x-8 font-semibold ml-8 mr-6">
            {menu.map((menu, idx) => (
              <Link to="about" smooth={true} duration={500} key={idx}>
                <p className="text-themeWhite hover:text-themeGreen capitalize">
                  {menu.title}
                </p>
              </Link>
            ))}
          </nav>
          <Link to="contact" smooth={true} duration={500}>
            <button className="px-4 py-2 rounded-md text-white bg-themeGreen hover:bg-themeDarkBlue">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <MdClose className="h-6 w-6 text-gray-700" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-0 right-0 h-auto w-[10rem] bg-gray-100`}
        >
          <nav className="mt-16 px-8 space-y-4">
            <Link to="top" smooth={true} duration={500}>
              <p className="text-gray-700 hover:text-gray-900">Home</p>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <p className="text-gray-700 hover:text-gray-900">About</p>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <p className="text-gray-700 hover:text-gray-900">Services</p>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <p className="text-gray-700 hover:text-gray-900">Contact</p>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
