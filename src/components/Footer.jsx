import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>Pengadaan</span>
            </a>
            <div className="my-8">
              <p className="mb-1"> Copyright © 2024 Pengadaan ltd.</p>
              <p>All rights reserved</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div className="col-start-2">
              <Footer.Title title="Contact Us" className="text-white" />
              <div className="max-w-md text-white">
                <div className="mb-3 block"></div>
                <TextInput
                  id="email4"
                  placeholder="name@flowbite.com"
                  required
                  rightIcon={SiMinutemailer}
                  type="email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
