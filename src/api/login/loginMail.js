import BASE_URL from "../../config.js";
import axios from "axios";
export const loginMail = async (loginData) => {
    let bodyData = JSON.stringify(loginData);


    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/user/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: bodyData,
    };
// console.log("config is ",config)
    try {
        const response = await axios(config);
        const data = response.data;
        return data;
    } catch (error) {
        if (error?.response?.data) {
            return error?.response?.data
        }
        else {
            return { status: false, msg: "Something went wrong !! its not you its us.... we'll fix it soon!!" }
        }
    }
};
