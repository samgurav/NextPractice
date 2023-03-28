import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
