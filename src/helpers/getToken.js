import Cookies from "js-cookie";

const getToken =  () => {
    return  Cookies.get("token");
}
export default getToken;