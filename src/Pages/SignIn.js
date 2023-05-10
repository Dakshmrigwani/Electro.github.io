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
        "Password must contain at least 8 characters, 1 uppercase letter,1 number required,1 special character required,"
      ),
    password1: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must contain at least 8 characters, 1 uppercase letter,1 number required,1 special character required,"
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
      password: "",
      email: "",
      password1: "",
      email1: "",
    },
    validationSchema,
    onSubmit: (values) => {
      navigate("/Body");
      console.log(validationSchema(), values);
    },
  });

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  const [justifyActive, setJustifyActive] = React.useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
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
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
          <div label="email">Email address</div>
          <MDBInput
            wrapperClass="mb-4"
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}
          <div label="password">Password</div>
          <MDBInput
            wrapperClass="mb-4 w-100 input-group"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
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

          <div className="row mb-5">
            <div className="col-md-6 col-sm-12">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
            </div>
            <div className="col-md-6 col-sm-12 text-end">
              <a href="!#">Forgot password?</a>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <MDBBtn className="mb-4 w-100" type="submit">
              Sign in
            </MDBBtn>
          </form>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <div label="name">Name</div>
          <MDBInput
            wrapperClass="mb-4"
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={touched.name && errors.name}
          />
          {touched.name && errors.name && (
            <div className="text-danger">{errors.name}</div>
          )}
          <div label="username">Username</div>
          <MDBInput
            wrapperClass="mb-4"
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={touched.username && errors.username}
          />
          {touched.username && errors.username && (
            <div className="text-danger">{errors.username}</div>
          )}
          <div label="email1">Email address</div>
          <MDBInput
            wrapperClass="mb-4"
            id="email1"
            name="email1"
            type="email1"
            value={values.email1}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={touched.email1 && errors.email1}
          />
          {touched.email1 && errors.email1 && (
            <div className="text-danger">{errors.email1}</div>
          )}
          <div label="password1">Password</div>

          <MDBInput
            wrapperClass="mb-4 w-100 input-group"
            id="password1"
            name="password1"
            type={showPassword1 ? "text" : "password"}
            value={values.password1}
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
            <div className="text-danger ">{errors.password1}</div>
          )}

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="agreeToTerms"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
              onChange={handleChange}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default SignIn;
