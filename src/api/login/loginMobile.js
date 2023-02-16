// {
//     "email":null,
//     "mobileNo":"9876543211",
//     "password":"abcAbRT1!"
// }
import BASE_URL from "../../config.js";
import axios from "axios";
export const loginMobile = async (loginData) => {
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
}
