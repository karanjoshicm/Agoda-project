import React, { useState } from "react";

//style
import "./SignUp.scss";
import "../Login/Login.scss";

//components
import ShadowContainer from "../../Components/ShadowContainer/ShadowContainer";
import TabView from "../../Components/TabView/TabView";
import SignUpWithEmail from "./SignUpWithEmail";
import SignUpWithMobileNumber from "./SignUpWithMobileNumber";
const SignUp = () => {
  const [activeTab, setActiveTab] = useState("Email");

  return (
    <div className="login">
      <ShadowContainer>
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-container-title">Sign up</h3>
            {/* <h6 className="login-container-subtitle">
              For security, please sign in to access your information
            </h6> */}
          </div>

          <TabView
            tabs={["Email", "Mobile"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            {
              {
                Email: <SignUpWithEmail />,
                Mobile: <SignUpWithMobileNumber />,
              }[activeTab]
            }
          </TabView>
        </div>
      </ShadowContainer>
    </div>
  );
};

export default SignUp;
