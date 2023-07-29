import { BASE_URL2 } from "../../config.js";
import axios from "axios";
export const homeData = async () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BASE_URL2}/landing/hotel/homePage/Chennai`,

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
            return { status: true, msg: "Something went wrong !! Its not you its us.... we'll fix it soon!!" }
        }
    }
};
