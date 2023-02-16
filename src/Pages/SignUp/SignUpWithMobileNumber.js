import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import countries from "../../Components/Dropdown/CountryData";
import Dropdown from "../../Components/Dropdown/Dropdown";
import InputField from "../../Components/InputField/InputField";
import FormButton from "../../Components/FormButton/FormButton";
import FormDivider from "../../Components/FormDivider/FormDivider";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";
import OtpContainer from "../../Components/OtpContainer/OtpContainer";
import ErrorMessageText from "../../Components/ErrorMessageText/ErrorMessageText";

//helpers
import { requiredErrorText } from "../../helpers/requiredErrorText";
import { reducerFunction } from "../../helpers/reducerFunction";

//library
import * as Yup from "yup";
import { useFormik } from "formik";

//api
import { signUpMobile } from "../../api/signUp/signUpMobile";
import { verifyOtp } from "../../api/otp/verifyOtp";
import { resendOtp } from "../../api/otp/resendOtp";
import { saveMobile } from "../../api/otp/saveMobile";

const SignUpWithMobileNumber = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    mobileCode: "+91",
  });

  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false,
  };
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

  const handleSubmitOtp = async (e) => {
    e.preventDefault()
    let otpData = {
      otp: Number(otp),
      mobileNo: formik.values.mobileNumber,
    };
    const data = await verifyOtp(otpData);
    console.log(data)
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      const saveMobileData = await saveMobile({ password: formik.values.password, mobileNo: formik.values.mobileNumber })
      if (saveMobileData.status) {
        navigate("/login");
      }
      else {
        setErrorMessage(data?.msg);

      }
    } else {
      dispatch({ type: "FETCH_ERROR", payload: data });
      setErrorMessage(data?.msg);
    }
  };

  const handleResendOtp = async () => {
    let otpData = {
      mobileNo: formik.values.mobileNumber
    }
    const data = await resendOtp(otpData)
    console.log(data)
  }
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
      let signUpData = {
        mobileNo: values.mobileNumber,
        password: values.password,
      };
      const data = await signUpMobile(signUpData);
      console.log("data is ", data);
      if (data.status) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        setOtpSend(true);
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
      <div className="mobileNumber-input">
        {otpSend ? (
          <>
            <div className="mobileNumber-input-text">
              <span>
                An OTP has been sent to phone number{" "}
                {formik.values.mobileNumber}
              </span>
            </div>
            <div className="mobileNumber-input-text">
              <span>The OTP wil expire in 10 minutes</span>
            </div>
            <OtpContainer setValue={setOtp} length={6} />
            <ErrorMessageText>{state.error && errorMessage}</ErrorMessageText>
            <FormButton onClick={handleSubmitOtp}> {state.loading ? "Verifying..." : "Submit OTP"}  </FormButton>
            <div className="mobileNumber-input-text">
              <span>Didn't receive?</span>{" "}
              <span onClick={() => handleResendOtp()} className="resend-otp">
                Resend OTP
              </span>
            </div>
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            noValidate
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
                type="text"


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
                formik.touched.password
                  ? formik.errors.password
                    ? formik.errors.password
                    : null
                  : null
              }
              onblur={formik.handleBlur("password")}

            />
            {errorMessage && <ErrorMessageText>{errorMessage}</ErrorMessageText>}

            <FormButton type="submit">
              {state.loading ? "Loading..." : "Send OTP"}{" "}
            </FormButton>
          </form>
        )}
        <br />

        <FormDivider>or continue with</FormDivider>
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
        <FormButton onClick={() => navigate("/login")} solid={false} hoverEffect={true}>
          Already have an account? Sign in
        </FormButton>


        <TermsAndConditions />
      </div>
    </div>
  );
};

export default SignUpWithMobileNumber;
