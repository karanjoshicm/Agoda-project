import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

//library imports
import { useFormik } from "formik";
import * as Yup from "yup";

//components
import InputField from "../../Components/InputField/InputField";
import FormButton from "../../Components/FormButton/FormButton";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";
import FormDivider from "../../Components/FormDivider/FormDivider";
import ErrorMessageText from "../../Components/ErrorMessageText/ErrorMessageText";
import CheckBox from "../../Components/CheckBox/CheckBox";

//icons
import { AiFillUnlock } from "react-icons/ai";

//api
import { signUpMail } from "../../api/signUp/signUpMail";
import { reducerFunction } from "../../helpers/reducerFunction";
import { requiredErrorText } from "../../helpers/requiredErrorText";

const SignUpWithEmail = () => {
  const [emailCheckBox, setEmailCheckBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false,
  };

  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

  //setting up the validation schema
  const schema = Yup.object({
    firstName: Yup.string()
      .min(4, "Must be min 4 Characters")
      .required(requiredErrorText("First name")),
    lastName: Yup.string()
      .min(4, "Must be min 4 Characters")
      .required(requiredErrorText("Last name")),
    email: Yup.string()
      .email("Invalid Email Address")
      .required(requiredErrorText("Email address")),
    password: Yup.string()
      .required(requiredErrorText("Password"))
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          return regExp.test(val);
        }
      ),
    confirmPassword: Yup.string()
      .required(requiredErrorText("Confirm Password"))
      .equals([Yup.ref("password")], "Passwords must match"),
  });

  //setting up formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch({ type: "FETCH_START" });
      let signUpData = {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        email: values.email,
        mobileNo: null,
      };
      const data = await signUpMail(signUpData);
      if (data.status) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        navigate("/login");
      } else {
        dispatch({ type: "FETCH_ERROR", payload: data });
        setErrorMessage(data?.msg);
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      noValidate
    >
      <InputField
        label="First name"
        placeholder="First name"
        value={formik.values.firstName}
        setValue={formik.handleChange("firstName")}
        type="text"
        name="firstName"
        errorText={
          formik.touched.firstName
            ? formik.errors.firstName
              ? formik.errors.firstName
              : null
            : null
        }
        onblur={formik.handleBlur("firstName")}
      />

      <InputField
        label="Last name"
        placeholder="Last name"
        value={formik.values.lastName}
        setValue={formik.handleChange("lastName")}
        type="text"
        name="lastName"
        errorText={
          formik.touched.lastName
            ? formik.errors.lastName
              ? formik.errors.lastName
              : null
            : null
        }
        onblur={formik.handleBlur("lastName")}
      />
      <InputField
        label="Email"
        placeholder="Email"
        value={formik.values.email}
        setValue={formik.handleChange("email")}
        type="text"
        name="email"
        errorText={
          formik.touched.email
            ? formik.errors.email
              ? formik.errors.email
              : null
            : null
        }
        onblur={formik.handleBlur("email")}
      />
      <InputField
        label="Password"
        placeholder="Password"
        value={formik.values.password}
        setValue={formik.handleChange("password")}
        type="password"
        name="password"
        errorText={
          formik.touched.password
            ? formik.errors.password
              ? formik.errors.password
              : null
            : null
        }
        onblur={formik.handleBlur("password")}
      />
      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        setValue={formik.handleChange("confirmPassword")}
        type="password"
        name="confirmPassword"
        errorText={
          formik.touched.confirmPassword
            ? formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
            : null
        }
        onblur={formik.handleBlur("confirmPassword")}
      />
      {errorMessage && <ErrorMessageText>{errorMessage} </ErrorMessageText>}
      {/* <button type="submit">test</button> */}
      <FormButton type="submit">
       
        {state.loading ? "Loading..." : "Sign up"}{" "}
      </FormButton>
      <div className="loginText">
        <div className="createAccountText">Create account</div>
        <div className="createAccountText">
          <AiFillUnlock /> Forgot password
        </div>
      </div>
      <FormDivider>or continue with</FormDivider>
      <FormButton solid={false}>
        <img
          src="https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg"
          alt=""
        />{" "}
        Google
      </FormButton>
      <div className="login-flex">
        <FormButton solid={false}>
          <img
            src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg"
            alt=""
          />{" "}
          Facebook
        </FormButton>
        <FormButton solid={false}>
          <img
            src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg"
            alt=""
          />{" "}
          Apple
        </FormButton>
      </div>
      <CheckBox
        isChecked={emailCheckBox}
        onChange={() => setEmailCheckBox((prev) => !prev)}
        textMessage="Email me exclusive Agoda promotions. I can opt out later as stated in the Privacy Policy."
      />
      <FormButton onClick={()=>navigate("/login")} solid={false} hoverEffect={true}>
        Already have an account? Sign in
      </FormButton>

      <TermsAndConditions />
    </form>
  );
};

export default SignUpWithEmail;
