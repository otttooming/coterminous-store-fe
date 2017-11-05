import * as React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface Props {
  children: React.ReactNode;
  title: string;
  menuItems?: any[];
}

const Main = ({ children, title, menuItems }: Props) => (
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
