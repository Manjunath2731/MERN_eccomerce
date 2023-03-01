import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign-Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1 "
                  placeholder="Your Email Adress..."
                  aria-label="Your Email Adress..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <a
                  href="https://maps.app.goo.gl/NLZqJTatQJbnDAN26"
                  target="_blank"
                >
                  <address className="text-white fs-6">
                    NH-66 <br />
                    Shirali <br /> Taluk: Bhatkal <br /> Dist: Uttara-Kannada{" "}
                    <br />
                    PinCode: 581354
                  </address>
                </a>
                <a
                  href="tel:+91 9482696487"
                  className="mt-1 d-block mb-1 text-white"
                >
                  +91 9482696487
                </a>
                <a
                  href="mailto:pakshirali@gmail.com"
                  className="mt-0 d-block mb-0 text-white"
                >
                  pakshirali@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Privacy Policy</Link>
                <Link className="text-white py-1 mb-1">Refund Policy</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
                <Link className="text-white py-1 mb-1">Blogs</Link>
                <Link className="text-white py-1 mb-1">Term's Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">About Us</Link>
                <Link className="text-white py-1 mb-1">FAQ</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Medications</Link>
                <Link className="text-white py-1 mb-1">Grocery</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} Powered by Patanjali Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
