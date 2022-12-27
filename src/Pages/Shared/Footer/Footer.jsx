import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/jobs" className="link link-hover">
            Jobs
          </Link>
          <Link to="/Help" className="link link-hover">
            Help
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/rimon_raisul" target="_blank">
              <FaTwitter className="text-2xl" title="twitter" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCubND4KfOLYSs6KM-roTFnA"
              target="_blank"
            >
              <FaYoutube className="text-2xl" title="youtube" />
            </a>
            <a href="https://www.facebook.com/raisul.rimon/" target="_blank">
              <FaFacebookF className="text-2xl" title="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-raisul-islam-rimon/"
              target="_blank"
            >
              <FaLinkedinIn className="text-2xl" title="linkedin" />
            </a>
            <a href="https://github.com/RaisulislamRimon" target="_blank">
              <FaGithub className="text-2xl" title="github" />
            </a>
            <a
              href="https://my-developer-portfolio-b2952.web.app/"
              target="_blank"
            >
              <GoPerson className="text-2xl" title="portfolio | details" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
