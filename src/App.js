import "./App.scss";
import { ToastContainer } from 'react-toastify';

//Router
import AppRouter from "./AppRouter/AppRouter";

//components
import Navbar from "./Components/Navbar/Navbar";
import AuthContext from "./AuthContext/Context";
import { useEffect, useState } from "react";
import useToast from "./helpers/useToast";
import getToken from "./helpers/getToken";
import { userInfo } from "./api/user/userInfo";


function App() {

  const { errorToast } = useToast()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchUserDetails = async () => {
    const token = getToken();
    setLoading(true);
    if (!token) {
      console.log("not token runs");
      setIsLoggedIn(false);
      setLoading(false);
    } else {
      setIsLoggedIn(true);
      // setLoading(true);
      const data = await userInfo(token);
      if (data.status) {
        setUserData(data.data);
        setLoading(false);
      } else {
        errorToast(data.msg);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn, userData: userData, setUserData: setUserData }}>
      {
        loading ? <>loading....</> : <>
          <ToastContainer />
          <div className="App">
            <AppRouter>
              <Navbar />
            </AppRouter>
          </div>
        </>
      }
    </AuthContext.Provider>
  );
}

export default App;
