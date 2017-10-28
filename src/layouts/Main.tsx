import * as React from "react";
import Header from "../components/header/Header";
import Sidemenu from "../components/sidemenu";
import Footer from "../components/footer";
import { bindActionCreators } from "redux";
import { initStore, startClock, addCount, serverRenderClock } from "../store";

interface Props {
  children: React.ReactNode;
  title: string;
  menuItems: any;
  sideMenuItems: any;
}

const Main = ({ children, title, menuItems, sideMenuItems }: Props) => (
  <div>
    <div className="wrapper">
      <Header title={title} menuItems={menuItems} />

      <div className="container">
        <div className="row">{children}</div>
      </div>

      <Footer />
    </div>

    <div className="bg__site" />
  </div>
);

export default Main;
