import * as React from 'react';
import Header from '../components/header/Header';
import Sidemenu from '../components/sidemenu';
import Footer from '../components/footer';
import { bindActionCreators } from 'redux';
import { initStore, startClock, addCount, serverRenderClock } from '../store';

const Main = ({ children, title = { title }, menuItems = { menuItems }, sideMenuItems = { sideMenuItems } }) => (
  <div>
    <div className="wrapper">
      <Header title={title} menuItems={menuItems} />

      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>

      <Footer />
    </div>

    <div className="bg__site" />
  </div>
);

export default Main;
