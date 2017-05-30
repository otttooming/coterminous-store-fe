import React from 'react'
import Header from '../components/header'
import Sidemenu from '../components/sidemenu'
import Footer from '../components/footer'

export default ({ children, title={title}, menuItems={menuItems}, sideMenuItems={sideMenuItems} }) => (
  <div>
    <div className='wrapper'>
      <Header title={title} menuItems={menuItems} />
      <div className='container'>
        <div className='row'>
            { children }
        </div>
      </div>
      <Footer />
    </div>
    <div className="bg__site"></div>
  </div>
)