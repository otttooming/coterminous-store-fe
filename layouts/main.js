import React from 'react'
import Header from '../components/header'
import Sidemenu from '../components/sidemenu'
import Footer from '../components/footer'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'

const main = ({ children, title = { title }, menuItems = { menuItems }, sideMenuItems = { sideMenuItems } }) => (
  <div>
    <div className='wrapper'>
      <Header title={title} menuItems={menuItems} />
      <div className='container'>
        <div className='row'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
    <div className="bg__site"></div>
  </div>
)

export default withRedux(initStore, null, null)(main)
