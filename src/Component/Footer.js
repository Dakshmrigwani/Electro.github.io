import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
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
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      style={{ clear: "both" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
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

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Electro</h6>
              <p>
                Here you can find products related electroinc items . great offers with great products
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Headphone
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Smartphone
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Watches
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Speakers
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright
        <a className="text-reset fw-bold ms-2" href="#">
          Electro.com
        </a>
      </div>
    </MDBFooter>
  );
}
