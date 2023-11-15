import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword1) => !prevShowPassword1);
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Name must be 15 characters or less")
      .required("Name is required"),
    username: Yup.string()
      .max(20, "Username must be 20 characters or less")
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character"
      ),
    password1: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character"
      ),
    email1: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password1: "",
      email1: "",
      password:'',
      email:'',
    },
    validationSchema,
    onSubmit: values => {
      if ((formik.values.email && formik.values.password) ) {
        navigate("/Pages/Body");
      }
      else if
        (formik.values.email1 && formik.values.password1 && formik.values.username && formik.values.name)
        {
          navigate("/Pages/Body");
        }
       else {
        console.log("Please fill the form");
      }
    },
  });

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <MDBContainer className="pt-5  d-flex flex-column w-50 fullheight">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <form onSubmit={handleSubmit}>
            <div label="email">Email address</div>
            <MDBInput
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
            <div label="password">Password</div>
            <MDBInput
              wrapperClass="w-100 input-group"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.password && errors.password}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </button>
            </MDBInput>
            {touched.password && errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}

            <MDBBtn className="mt-4 w-100" type="submit">
              Sign in
            </MDBBtn>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <form onSubmit={handleSubmit}>
            <div label="name">Name</div>
            <MDBInput
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <div className="text-danger">{errors.name}</div>
            )}
            <div label="username">Username</div>
            <MDBInput
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.username && errors.username}
            />
            {touched.username && errors.username && (
              <div className="text-danger">{errors.username}</div>
            )}
            <div label="email1">Email address</div>
            <MDBInput
              id="email1"
              name="email1"
              type="email1"
              value={formik.values.email1}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.email1 && errors.email1}
            />
            {touched.email1 && errors.email1 && (
              <div className="text-danger">{errors.email1}</div>
            )}
            <div label="password1">Password</div>

            <MDBInput
              wrapperClass="w-100 input-group"
              id="password1"
              name="password1"
              type={showPassword1 ? "text" : "password"}
              value={formik.values.password1}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={touched.password1 && errors.password1}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={togglePasswordVisibility1}
              >
                {showPassword1 ? <BsEyeSlash /> : <BsEye />}
              </button>
            </MDBInput>

            {touched.password1 && errors.password1 && (
              <div className="text-danger mb-4">{errors.password1}</div>
            )}

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="agreeToTerms"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
                onChange={handleChange}
              />
            </div>
            <MDBBtn className="mb-4 w-100" type="submit">
              Sign up
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column text-center">
          <p>Sign in with</p>
          <div className="d-flex gap-3">
            <BsInstagram /> <BsLinkedin /> <BsTwitter /> <FcGoogle />{" "}
            <SiGmail />
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default SignIn;
