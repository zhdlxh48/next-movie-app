import React from "react";
import NavBar from "./NavBar";

const AppLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
