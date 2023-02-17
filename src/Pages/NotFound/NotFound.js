import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Page not found
      </div>
    </>
  );
};

export default NotFound;
