import React from "react";
import Navbar from "./components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
