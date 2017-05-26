import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ children, title={title}, menuItems={menuItems} }) => (
  <div>
    <Header title={title} menuItems={menuItems} />
      { children }
    <Footer />
  </div>
)