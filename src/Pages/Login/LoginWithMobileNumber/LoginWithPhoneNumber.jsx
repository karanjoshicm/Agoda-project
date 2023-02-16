import React, { useReducer, useState } from "react";

//components
import countries from "../../../Components/Dropdown/CountryData";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import InputField from "../../../Components/InputField/InputField";
import FormButton from "../../../Components/FormButton/FormButton";
import FormDivider from "../../../Components/FormDivider/FormDivider";
import TermsAndConditions from "../../../Components/TermsAndConditions/TermsAndConditions";

//icons
import { AiFillUnlock } from "react-icons/ai";

//libraries
import * as Yup from "yup";
import { useFormik } from "formik";

//helpers
import { reducerFunction } from "../../../helpers/reducerFunction";
import { requiredErrorText } from "../../../helpers/requiredErrorText";

//api
import { loginMobile } from "../../../api/login/loginMobile";
import ErrorMessageText from "../../../Components/ErrorMessageText/ErrorMessageText";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginWithPhoneNumber = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    mobileCode: "+91",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false,
  };
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
  //setting up the validation schema
  const schema = Yup.object({
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
    mobileNumber: Yup.string()
      .required("Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10, "Too short")
      .max(10, "Too Long"),
  });

  //setting up formik
  const formik = useFormik({
    initialValues: {
      password: "",
      mobileNumber: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch({ type: "FETCH_START" });
      let loginData = {
        mobileNo: values.mobileNumber,
        password: values.password,
      };
      const data = await loginMobile(loginData);
      console.log("data is ", data);
      if (data.status) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        Cookies.set('token', data.token, { expires: 2 })

        navigate("/profile")
      } else {
        dispatch({ type: "FETCH_ERROR", payload: data });
        setErrorMessage(data?.msg);
      }
    },
  });
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
        className="mobileNumber-input"
      >
        <label className="mobileNumber-input-label" htmlFor="">
          Mobile Number
        </label>
        <div className="login-phone-flex">
          <Dropdown
            elements={countries}
            value={selectedCountry}
            setValue={setSelectedCountry}
            search={true}
          />
          <InputField
            style={{
              padding: 0,
            }}
            value={formik.values.mobileNumber}
            setValue={formik.handleChange("mobileNumber")}
            name="mobileNumber"
            
          />
        </div>
        <ErrorMessageText>
          {formik.touched.mobileNumber
            ? formik.errors.mobileNumber
              ? formik.errors.mobileNumber
              : null
            : null}
        </ErrorMessageText>
        <InputField
          label="Password"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          setValue={formik.handleChange("password")}
          name="password"
          errorText={
            formik.touched.mobileNumber
              ? formik.errors.mobileNumber
                ? formik.errors.mobileNumber
                : null
              : null
          }
          onblur={formik.handleBlur("password")}

        />
        {errorMessage && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
        <FormButton>Sign in </FormButton>

        <div className="loginText">
          <div
            onClick={() => navigate("/signup")}
            className="createAccountText"
          >
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
          />
          Google
        </FormButton>
        <div className="login-flex">
          <FormButton solid={false}>
            <img
              src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg"
              alt=""
            />
            Facebook
          </FormButton>
          <FormButton solid={false}>
            <img
              src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg"
              alt=""
            />
            Apple
          </FormButton>
        </div>
        <TermsAndConditions />
      </form>
    </div>
  );
};

export default LoginWithPhoneNumber;
