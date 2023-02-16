import { useNavigate } from "react-router-dom";
import React, { useContext, useReducer, useState } from "react";

//components
import FormButton from "../../../Components/FormButton/FormButton";
import InputField from "../../../Components/InputField/InputField";
import FormDivider from "../../../Components/FormDivider/FormDivider";
import TermsAndConditions from "../../../Components/TermsAndConditions/TermsAndConditions";

//icons
import { AiFillUnlock } from "react-icons/ai";

//libraries
import * as Yup from "yup";
import { useFormik } from "formik";
import Cookies from "js-cookie";

//helpers
import { requiredErrorText } from "../../../helpers/requiredErrorText";
import { reducerFunction } from "../../../helpers/reducerFunction";
import { loginMail } from "../../../api/login/loginMail";
import ErrorMessageText from "../../../Components/ErrorMessageText/ErrorMessageText";
import AuthContext from "../../../AuthContext/Context";

const LoginWithEmail = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch({ type: "FETCH_START" });
      let loginData = {
        password: values.password,
        email: values.email,
        mobileNo: null,
      };
      const data = await loginMail(loginData);
      if (data.status) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        Cookies.set("token", data.token, { expires: 2 });
        setIsLoggedIn(true);
        navigate("/profile");
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
        formik.handleSubmit();
      }}
    >
      <InputField
        label="Email"
        placeholder="Email"
        value={formik.values.email}
        setValue={formik.handleChange("email")}
        type="email"
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
      {errorMessage && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
      <FormButton type={"submit"}>
        {state.loading ? "Loading..." : "Sign in"}{" "}
      </FormButton>
      <div className="loginText">
        <div onClick={() => navigate("/signup")} className="createAccountText">
          Create account
        </div>
        <div className="createAccountText">
          <AiFillUnlock /> Forgot password
        </div>
      </div>
      <FormDivider>or sign in with</FormDivider>
      <FormButton solid={false}>
        <img
          src="https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg"
          alt=""
        />{" "}
        Google
      </FormButton>
      <div className="login-flex">
        <FormButton solid={false}>
          {" "}
          <img
            src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg"
            alt=""
          />{" "}
          Facebook
        </FormButton>
        <FormButton solid={false}>
          {" "}
          <img
            src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg"
            alt=""
          />{" "}
          Apple
        </FormButton>
      </div>
      <TermsAndConditions />
    </form>
  );
};

export default LoginWithEmail;
