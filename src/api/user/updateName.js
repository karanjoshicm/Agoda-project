import BASE_URL from "../../config.js";
import axios from "axios";
import getToken from "../../helpers/getToken.js";
export const updateName = async (nameData = {}) => {
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/profile/name`, headers: {
            'Authorization': `Bearer ${getToken()}`, 'Content-Type': 'application/json'
        },
        data: JSON.stringify(nameData)
    };
    try {
        const response = await axios(config);
        const data = response.data;
        console.log("data is ", data)
        return data;
    }catch (error) {
        if (error?.response?.data) {
            return error?.response?.data
        }
        else {
            return { status: false, msg: "Something went wrong !! Its not you its us.... we'll fix it soon!!" }
        }
    }
};
