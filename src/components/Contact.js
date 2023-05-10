import React, { useState, useEffect } from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import CallIcon from "@mui/icons-material/Call";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const ContactForm = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7un0zs",
        "template_9zpfuz6",
        form.current,
        "L9SMMWhHwwVVXCwWJ"
      )
      .then(
        (result) => {
          if (result) {
            alert("thanks for your message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div
      className="w-[100vw] px-6 py-[60px] md:py-[120px] md:pt-[150px]"
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-center max-w-[70rem] mx-auto">
        <div className="w-full md:w-1/2 mb-12 md:pr-[2rem]">
          <h2 className="text-[3rem] font-bold text-themeBlue">Get In Touch</h2>
          
          <h3 className="text-xl font-semibold text-themeBlue mb-2 mt-2">
            Email
          </h3>
          <div className="flex items-center mb-4">
            <HiOutlineMail className="mr-2 text-themeGreen text-2xl" />
            <p className="text-gray-600 mb-0">info@konicacorporation.com</p>
          </div>
          <h3 className="text-xl font-semibold text-themeBlue mb-2">Phone</h3>
          <div className="flex items-center mb-4">
            <CallIcon className="mr-2 text-themeGreen text-2xl" />
            <div>
              <p className="text-gray-600 mb-0">+88-01716 161730</p>
              <p className="text-gray-600 mb-0">+88-01715 617463</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-themeBlue mb-2">Address</h3>
          <div className="flex items-center mb-4">
            <HiOutlineLocationMarker className="mr-2 text-themeGreen text-2xl" />
            <div>
              <p className="text-gray-600 mb-0 ">House-18, Road-4,
               Block-B, Ajmeribag<br/>
              Fatulla, Narayanganj-1400, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <form ref={form}>
            
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border mb-4  rounded-lg py-2 px-3 w-full"
                required
              />
            
            
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border mb-4 rounded-lg py-2 px-3 w-full"
                required
              />
            
            
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="border mb-4 rounded-lg py-2 px-3 w-full"
                required
              />
            
            
              <textarea
                name="inquiry"
                placeholder="Project Details/Inquiry"
                className="border mb-4 rounded-lg py-2 px-3 w-full h-32 resize-none"
                required
              />
            
            <button
              type="submit"
              onClick={sendEmail}
              className="bg-themeBlue border-2 border-transparent  hover:border-themeGreen text-white font-bold py-2 px-6 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/*
    
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
    */}
    </div>
  );
};

export default ContactForm;
