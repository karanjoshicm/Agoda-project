import BASE_URL from "../../config.js";
import axios from "axios";
export const resendOtp = async (otpData) => {
  let bodyData = JSON.stringify(otpData);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/user/register/resend/otp`,
    headers: {
      "Content-Type": "application/json",
    },
    data: bodyData,
  };

  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (error) {
    console.log("error is ", error)
    return error.response.data;
  }
};
