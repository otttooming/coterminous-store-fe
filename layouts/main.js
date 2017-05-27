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
          <aside className='col-lg-3 sidebar_grid hidden-md-down'>
              <Sidemenu sideMenuItems={sideMenuItems} />
          </aside>

          <div className="col-xs-12 col-lg-9">
            { children }
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div className="bg__site"></div>
  </div>
)