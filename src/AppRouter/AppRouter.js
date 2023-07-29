import { Route, Routes, BrowserRouter } from "react-router-dom";
import Protected from "../Components/Protected/Protected";
import EmailVerification from "../Pages/EmailVerification/EmailVerification";

//Pages
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import SearchPage from "../Pages/SearchPage/SearchPage";
import SignUp from "../Pages/SignUp/SignUp";

const AppRouter = ({ children }) => {
  const routes = [
    {
      path: "/",
      element: <Home />,
      // isProtected: true
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: <Profile />,
      isProtected: true,
    },
    {
      path: "/verification",
      element: <EmailVerification />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];

  return (
    <BrowserRouter>
      {children}
      <Routes>
        {routes.map((route, index) => {
          if (route.isProtected)
            return (
              <Route
                key={index}
                path={route.path}
                element={<Protected> {route.element}</Protected>}
              />
            );
          else
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
