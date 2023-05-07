import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Footer(props) {
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
    <div className="w-screen bg-gradient-to-tr from-black to-themeBlue">
      <div className="max-w-[1140px] mx-auto py-[80px] md:flex">
        <div>
          <div className="text-3xl font-bold text-themeWhite">
            <span className="text-themeGreen">K</span>onica{" "}
            <span className="text-themeGreen">C</span>orporation
          </div>
          <div className="mt-8">
            <p className="flex gap-2 my-4">
              <EmailIcon className="text-themeGreen" />
              <span className="text-themeWhite">sakib@gmail.com</span>
            </p>
            <p className="flex gap-2 my-4">
              <LocalPhoneIcon className="text-themeGreen" />
              <span className="text-themeWhite">+01812311888</span>
            </p>
            <p className="flex gap-2 my-4">
              <EmailIcon className="text-themeGreen" />
              <span className="text-themeWhite">sakib@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default Footer;
