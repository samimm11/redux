import React from "react";
import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";

const RootLayout = () => {
  return (
    <>
      <NavBarPanel></NavBarPanel>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
