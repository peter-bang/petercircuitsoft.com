import React from "react";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <MainAppBar />
      {children}
      <MainFooter />
    </div>
  );
};

export default Layout;
