import BASE_URL from "../../config.js";
import axios from "axios";
export const userInfo = async (token) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/user/profile`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios(config);
        const data = response.data;
        console.log("profile data is ", data)
        return data;
    } catch (error) {
        console.log("profile error is ", error)
        if (error?.response?.data) {
            return error?.response?.data
        }
        else {
            return { status: false, msg: "Something went wrong !! Its not you its us.... we'll fix it soon!!" }
        }
    }
};
