import React, { PropsWithChildren } from "react";
import Announce from "../components/Announce";
import Footer from "../components/footer";
import HeaderNav from "../components/headerNav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Announce.RegistrationOpen></Announce.RegistrationOpen>
      <HeaderNav />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
