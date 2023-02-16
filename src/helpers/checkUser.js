import Cookies from 'js-cookie'

const checkUser = () => {
    let userPresent = Cookies.get("token") ? true : false
    // let userPresent=true
    if (userPresent) {
        return true
    }
    else return false
}

export default checkUser