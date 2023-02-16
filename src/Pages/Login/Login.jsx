import React, { useContext, useState } from "react";
import AuthContext from "../../AuthContext/Context";

//components
import InputField from "../../Components/InputField/InputField";
import ShadowContainer from "../../Components/ShadowContainer/ShadowContainer";
import TabView from "../../Components/TabView/TabView";

//styles
import "./Login.scss";
import LoginWithEmail from "./LoginWithEmail/LoginWithEmail";
import LoginWithPhoneNumber from "./LoginWithMobileNumber/LoginWithPhoneNumber";
const Login = () => {
  const [activeTab, setActiveTab] = useState("Email");
  return (
    <div className="login">
      <ShadowContainer>
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-container-title">Sign in</h3>
            <h6 className="login-container-subtitle">
              For security, please sign in to access your information
            </h6>
          </div>

          <TabView
            tabs={["Email", "Mobile"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            {
              {
                Email: <LoginWithEmail />,
                Mobile: <LoginWithPhoneNumber />,
              }[activeTab]
            }
          </TabView>
        </div>
      </ShadowContainer>
    </div>
  );
};

export default Login;
