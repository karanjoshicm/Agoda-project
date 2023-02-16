import BASE_URL from "../../config.js";
import axios from "axios";
export const emailVerify = async (token) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/user/register/verifyemail?token=${token}`,

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
};
