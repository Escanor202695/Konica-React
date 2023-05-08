import React, { useState, useEffect } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, email, phone, company, inquiry } = formData;
      const text = `Phone: ${phone}\n\nCompany: ${company}\n\nInquiry:\n${inquiry}`;

      if (
        name === "" ||
        email === "" ||
        phone === "" ||
        company === "" ||
        inquiry === ""
      ) {
        setError(true);
        setShow(true);
        return;
      }

      await axios.post("https://api.crantechllc.com/email/send", {
        name,
        text,
        email,
      });

      // handle successful form submission
      setShow(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiry: "",
      });
    } catch (error) {
      // handle error in form submission
      setError(true);
      setShow(true);
    }
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 1500);
    }
  }, [show]);

  return (
    <div className="w-[100vw] px-6 py-16 md:py-[120px]">
      <div className="flex flex-col md:flex-row justify-center max-w-[70rem] mx-auto">
        <div className="w-full md:w-1/2 mb-12 md:pr-[2rem]">
          <h2 className="text-[3rem] font-bold text-themeBlue">Get In Touch</h2>
          <p className="text-sm mb-10 hidden md:block">
            Contact us today to discuss your requirements, learn more
            about our services.
          </p>
          <h3 className="text-xl font-semibold">Email</h3>
          <div className="flex items-center mb-4">
            <HiOutlineMail className="mr-2 text-themeGreen text-2xl" />
            <p className="text-gray-700 mb-0">info@konicacorporation.com</p>
          </div>

          <h3 className="text-xl font-semibold">Address</h3>
          <div className="flex items-center mb-4">
            <HiOutlineLocationMarker className="mr-2 text-themeGreen text-[40px] md:text-2xl" />
            <p className="text-gray-700 mb-0 ">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <form onSubmit={handleSubmit} id="form" noValidate>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="inquiry"
                placeholder="Project Details/Inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                className="border rounded-lg py-2 px-3 w-full h-32 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-themeBlue border-2 border-transparent  hover:border-themeGreen text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title className="text-themeGreen">
            {(!error && "Thank you!") || "Sorry!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(!error && "We will get back to you soon.") ||
            "Complete all the fields, please."}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactForm;
