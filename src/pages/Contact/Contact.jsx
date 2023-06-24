import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold">
          Contact <span className="text-info">Us</span>
        </h3>
        <p className="text-lg font-medium">Get in touch!</p>
      </div>
      <div className="flex gap-20 mb-10">
        <div className="max-w-lg">
          <div className="flex gap-5 mb-3 w-full">
            <div className="w-full">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                placeholder="type here"
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="text"
                placeholder="type here"
                className="input input-bordered input-info w-full"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              className="textarea textarea-info textarea-lg w-full"
              placeholder="message here"
            ></textarea>
          </div>
          <button className="btn btn-info w-36">send message</button>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-info rounded-full text-2xl">
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </div>
            <p className="text-xl font-medium">Calcutta, India</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-info rounded-full text-2xl">
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <p className="text-xl font-medium">+01234567890</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-info rounded-full text-2xl">
              <FaEnvelope></FaEnvelope>
            </div>
            <p className="text-xl font-medium">event@management.com</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-auto">
        <h3 className="text-3xl font-semibold mb-5">
          Find <span className="text-info">us</span> on
        </h3>
        <div className="flex items-center justify-center">
          <div className="flex gap-5">
            <div className="w-12 h-12 border-2 text-info border-info rounded-full text-2xl flex items-center justify-center hover:bg-info cursor-pointer hover:text-white">
              <FaFacebookF></FaFacebookF>
            </div>
            <div className="w-12 h-12 border-2 text-info border-info rounded-full text-2xl flex items-center justify-center hover:bg-info cursor-pointer hover:text-white">
              <FaTwitter></FaTwitter>
            </div>
            <div className="w-12 h-12 border-2 text-info border-info rounded-full text-2xl flex items-center justify-center hover:bg-info cursor-pointer hover:text-white">
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
