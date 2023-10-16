import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Electro-logo.png";
import { ThemeContext } from "../Context/ThemeContext";
import { AiFillFacebook } from "react-icons/ai";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <section
        className="text-center text-lg-start text-muted"
        style={{ clear: "both" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between toggletext p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <AiFillFacebook color="secondary" fab icon="facebook-f" />
            </a>
            <a href="#" className="me-4 text-reset">
              <BsTwitter color="secondary" fab icon="twitter" />
            </a>
            <a href="#" className="me-4 text-reset">
              <FcGoogle color="secondary" fab icon="google" />
            </a>
            <a href="#" className="me-4 text-reset">
              <BsInstagram color="secondary" fab icon="instagram" />
            </a>
            <a href="#" className="me-4 text-reset">
              <BsLinkedin color="secondary" fab icon="linkedin" />
            </a>
            <a href="#" className="me-4 text-reset">
              <BsGithub color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="container-fluid">
          <div className="text-center text-md-start mt-5 toggletext">
            <div className=" row mt-3">
              <div className=" col-md-5 mx-auto mb-4">
                <div class="imglogofooter">
                  <Link
                    to="/Pages/Body"
                    className="text-decoration-none toggletext "
                  >
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <h6 className="text-uppercase fw-bold mb-4">Electro</h6>
                <p>
                  Here you can find products related to electronic items. Great
                  offers with great products.
                </p>
              </div>

              <div className="col-md-7 mx-auto mb-4">
                <div className="d-flex flex-column toggletext">
                  <div className="d-flex flex-column mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-4 text-decoration-none">
                      <p>
                        <Link
                          to="/Pages/Headphone"
                          className="text-decoration-none toggletext me-2"
                        >
                          <a className="text-reset text-decoration-none">
                            Headphone
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Pages/Smartphones"
                          className="text-decoration-none toggletext me-2"
                        >
                          <a className="text-reset text-decoration-none">
                            Smartphone
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Pages/Watches"
                          className="text-decoration-none toggletext me-2"
                        >
                          <a className="text-reset text-decoration-none">
                            Watches
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Pages/Speaker"
                          className="text-decoration-none toggletext me-2"
                        >
                          <a className="text-reset text-decoration-none">
                            Speakers
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/Pages/Laptops"
                          className="text-decoration-none toggletext me-2"
                        >
                          <a className="text-reset text-decoration-none">
                            Laptops
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column mb-4 toggletext">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                      <p>
                        <CiLocationOn className="me-2" />
                        New York, NY 10012, US
                      </p>
                      <p>
                        <SiGmail className="me-2" />
                        info@example.com
                      </p>
                      <p>
                        <BsFillTelephoneFill className="me-2" />+ 01 234 567 88
                      </p>
                      <p>
                        <BsFillTelephoneFill className="me-2" />+ 01 234 567 89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 toggletext"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright
          <a className="text-reset fw-bold ms-2 text-decoration-none" href="#">
            Electro.com
          </a>
        </div>
      </section>
    </>
  );
}
