import BASE_URL from "../../config.js";
import axios from "axios";
export const signUpMobile = async (signUpData) => {
  let bodyData = JSON.stringify(signUpData);
  console.log(bodyData)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/user/register`,
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
    console.log("error is ",error)
    return error.response.data;
  }
};
