import React, { useEffect, useReducer, useState } from "react";


//components
import SideNav from "../../Components/SideNav/SideNav";
import Wrapper from "../../Components/Wrapper/Wrapper";
import ShadowContainer from "../../Components/ShadowContainer/ShadowContainer";
import InputField from "../../Components/InputField/InputField";
import AppButton from "../../Components/AppButton/AppButton";
import Dropdown from "../../Components/Dropdown/Dropdown";
import countries from "../../Components/Dropdown/CountryData";
import ErrorMessageText from "../../Components/ErrorMessageText/ErrorMessageText";
import SuccessText from "../../Components/SuccessText/SuccessText";

//api
import { userInfo } from "../../api/user/userInfo";

//styles
import "./Profile.scss";

//libraries
import { BiUser } from "react-icons/bi";
import Cookies from "js-cookie";

//API
import { updateName } from "../../api/user/updateName";

//helper
import { reducerFunction } from "../../helpers/reducerFunction"
import getToken from "../../helpers/getToken";
import useToast from "../../helpers/useToast"


//api
import { updateMobile } from "../../api/user/updateMobile";
import { updatePassword } from "../../api/user/updatePassword";
import { updatePayment } from "../../api/user/updatePayment";
import { updateNewsLetter } from "../../api/user/updateNewsLetter";
import { updateTripMail } from "../../api/user/updateTripMail";
import { updatePromotion } from "../../api/user/updatePromotion";
import { updateReminder } from "../../api/user/updateReminder";

const Profile = () => {
  const { successToast, errorToast } = useToast()
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isMobileEdit, setIsMobileEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");




  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    saveCreditInformation: "",
    trip: "",
    promotion: "",
    reminder: "",
    newsLetter: "",
    isVerified: ""
  })


  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    mobileCode: "+91",
  });
  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false
  }
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)
  // get user info using api
  const getUserInfo = async () => {
    const userResponse = await userInfo(getToken());
    const { data } = userResponse;
    setFirstName(data?.firstName)
    setLastName(data?.lastName)
    setMobileNumber(data?.mobileNo)
    setUserDetails({
      firstName: data?.firstName,
      lastName: data?.lastName,
      mobileNumber: data?.mobileNo,
      email: data?.email,
      saveCreditInformation: data?.toSave,
      trip: data?.Trip,
      promotion: data?.Promotion,
      reminder: data?.remainder,
      newsLetter: data?.newsLetter,
      isVerified: data.isVerified
    })
  };

  useEffect(() => {
    //get the token from cookie
    const token = Cookies.get("token");
    console.log("token is ", token);
    getUserInfo(token);
  }, []);



  const saveName = async () => {
    dispatch({ type: "FETCH_START" })
    const nameData = {
      "firstName": firstName,
      "lastName": lastName
    }
    const data = await updateName(nameData);
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
      getUserInfo()
      successToast(data.msg)
      setIsNameEdit(false)
    }
    else {
      dispatch({ type: "FETCH_ERROR", payload: data })
      errorToast(data.msg)
    }

  }

  const saveMobile = async () => {
    dispatch({ type: "FETCH_START" })

    const data = await updateMobile(mobileNumber);
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
      getUserInfo()
      successToast(data.msg)
      setIsMobileEdit(false)
    }
    else {
      dispatch({ type: "FETCH_ERROR", payload: data })
      errorToast(data.msg)
    }
  }

  const savePassword = async () => {
    dispatch({ type: "FETCH_START" })
    const password = {
      "oldPassword": currentPassword,
      "newPassword": newPassword
    }
    const data = await updatePassword(password);
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
      successToast(data.msg)
      setIsPasswordEdit(false)
    }
    else {
      dispatch({ type: "FETCH_ERROR", payload: data })
      errorToast(data.msg)
    }
  }
  const saveToggleData = async (value, method = () => { }) => {
    dispatch({ type: "FETCH_START" })

    const data = await method(!value);
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
      successToast(data.msg)
      setIsMobileEdit(false)
    }
    else {
      dispatch({ type: "FETCH_ERROR", payload: data })
      errorToast(data.msg)
    }
  }

  const saveEmailSubscriptions = async (value) => {
    dispatch({ type: "FETCH_START" })

    const data = await updateNewsLetter(value);
    if (data.status) {
      dispatch({ type: "FETCH_SUCCESS", payload: data })
      successToast(data.msg)
    }
    else {
      console.log("something went wrong")
      dispatch({ type: "FETCH_ERROR", payload: data })
      errorToast(data.msg)
    }
  }

  return (
    <Wrapper>
      <div className="user">
        <ShadowContainer transparentBg={true}>
          <div className="user-sideNav">
            <SideNav />
          </div>
        </ShadowContainer>
        <div className="user-details">
          <div className="user-details-header">User details</div>
          <UserDetailsCard
            label="Name"
            value={userDetails.firstName + " " + userDetails.lastName}
            isOpen={isNameEdit}
            hasIcon={true}
            setIsOpen={setIsNameEdit}
          >
            <div
              style={{
                width: "350px",
              }}
            >

              <InputField label="First name" value={firstName} setValue={(e) => setFirstName(e.target.value)} />
              <InputField label="Last name" value={lastName} setValue={(e) => setLastName(e.target.value)} />
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <AppButton
                  onClick={() => setIsNameEdit(false)}
                  style={{
                    width: "100%",
                  }}
                >
                  Cancel
                </AppButton>
                <AppButton onClick={() => saveName()}
                  solid={true}
                  style={{
                    width: "100%",
                  }}
                >
                  Save
                </AppButton>
              </div>
            </div>
          </UserDetailsCard>

          <UserDetailsCard
            label="Phone number"
            value={userDetails?.mobileNumber}
            isOpen={isMobileEdit}
            hasIcon={false}
            setIsOpen={setIsMobileEdit}
          >
            <div
              style={{
                width: "350px",
              }}
            >
              <Dropdown
                elements={countries}
                value={selectedCountry}
                setValue={setSelectedCountry}
                search={true}
              />
              <InputField
                label="Mobile Number"
                value={mobileNumber}
                setValue={(e) => setMobileNumber(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <AppButton
                  onClick={() => setIsMobileEdit(false)}
                  style={{
                    width: "100%",
                  }}
                >
                  Cancel
                </AppButton>
                <AppButton
                  onClick={() => saveMobile()}
                  solid={true}
                  style={{
                    width: "100%",
                  }}
                >
                  Save
                </AppButton>
              </div>
            </div>
          </UserDetailsCard>

          <UserDetailsCard
            label="Password"
            value="•••••••••••"
            isOpen={isPasswordEdit}
            hasIcon={false}
            setIsOpen={setIsPasswordEdit}
          >
            <div
              style={{
                width: "350px",
              }}
            >
              <InputField
                label="Current Password"
                value={currentPassword}
                setValue={(e) => setCurrentPassword(e.target.value)}
              />
              <InputField
                label="New Password"
                value={newPassword}
                setValue={(e) => setNewPassword(e.target.value)}
              />
              <InputField
                label="Confirm Password"
                value={confirmPassword}
                setValue={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <AppButton
                  onClick={() => setIsPasswordEdit(false)}
                  style={{
                    width: "100%",
                  }}
                >
                  Cancel
                </AppButton>
                <AppButton
                  onClick={() => savePassword()}
                  solid={true}
                  style={{
                    width: "100%",
                  }}
                >
                  Save
                </AppButton>
              </div>
            </div>
          </UserDetailsCard>
          <br />
          <div className="user-details-header">Payment methods</div>
          <ToggleCard
            label="Save my credit card information"
            value={userDetails.saveCreditInformation}
            setValue={() => setUserDetails({ ...userDetails, saveCreditInformation: !userDetails?.saveCreditInformation })}
            onChange={saveToggleData}
            methodName={updatePayment}
            userDetails={userDetails}


          />
          <br />
          <div className="user-details-header">Email subscriptions</div>
          <CheckBoxCard
            label="Newsletter"
            checkBoxArray={[
              { label: "Daily", value: false },
              { label: "Twice a week", value: false },
              { label: "Weekly", value: false },
              { label: "Never", value: false },
            ]}
            name="Email Subscriptions"
            setSelectedValue={(val) => setUserDetails({ ...userDetails, newsLetter: val })}
            onChange={saveEmailSubscriptions}
            value={userDetails?.newsLetter}
          />
          <ToggleCard
            label="I would like to receive booking assist reminders"
            value={userDetails?.reminder}
            onChange={saveToggleData}
            methodName={updateReminder}
            setValue={() => setUserDetails({ ...userDetails, reminder: !userDetails?.reminder })}

          />
          <ToggleCard
            label="I would like to receive emails about Agoda promotions"
            value={userDetails?.promotion}
            // setValue={setPromotion}
            onChange={saveToggleData}
            methodName={updatePromotion}
            setValue={() => setUserDetails({ ...userDetails, promotion: !userDetails?.promotion })}

          />
          <ToggleCard
            label="I would like to know about information and offers related to my upcoming trip"
            value={userDetails?.trip}
            // setValue={setTrip}
            onChange={saveToggleData}
            methodName={updateTripMail}
            setValue={() => setUserDetails({ ...userDetails, trip: !userDetails?.trip })}

          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;

const UserDetailsCard = ({
  label = "",
  value = "",
  hasIcon = false,
  isOpen = false,
  setIsOpen = () => { },
  children,
}) => {
  return (
    <ShadowContainer>
      <div className="user-details-card">
        {isOpen ? (
          <>{children}</>
        ) : (
          <div className="flex">
            <div className="user-details-card-left">
              {hasIcon && (
                <div className="user-details-card-iconContainer">
                  <BiUser />
                </div>
              )}
              <div className="user-details-card-infoContainer">
                <div className="user-details-card-infoLabel">{label}</div>
                <div className="user-details-card-infoData">{value}</div>
              </div>
            </div>
            <div className="user-details-card-right">
              <div className="user-details-card-right-content">
                <span
                  onClick={() => setIsOpen(true)}
                  className="user-details-card-editButton"
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ShadowContainer>
  );
};

const ToggleCard = ({ label = "", value = true, setValue = () => { }, onChange = () => { }, methodName }) => {
  return (
    <ShadowContainer>
      <div className="toggle-card">
        <label htmlFor="">{label}</label>
        <label class="switch">
          <input
            value={value}
            checked={value}
            onChange={() => {
              setValue();
              onChange(value, methodName)
            }}
            type="checkbox"
          />
          <span class="slider round"></span>
        </label>
      </div>
    </ShadowContainer>
  );
};

const CheckBoxCard = ({ checkBoxArray = [], label = "", name = "", setSelectedValue = () => { }, onChange = () => { }, value = "" }) => {
  console.log("check box value ", value)
  return (
    <ShadowContainer>
      <div className="toggle-card not-flex">
        <label htmlFor="">{label}</label>
        <div
          style={{
            display: "flex",
            gap: "90px",
            flexWrap: "wrap",
          }}
        >
          {checkBoxArray.map((elem, index) => (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <input
                style={{
                  borderRadius: "50%",
                }}
                checked={value.toLowerCase() == elem?.label?.toLowerCase()} type={"radio"}
                name={name}
                onChange={() => {

                  setSelectedValue(elem?.label?.toLowerCase());
                  onChange(index)
                }}
              />
              <label style={{
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: 1.28
              }}>{elem?.label}</label>
            </div>
          ))}
        </div>
      </div>
    </ShadowContainer>
  );
};
