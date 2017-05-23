import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ children, title={title} }) => (
  <div>
    <Header title={title} />
      { children }
    <Footer />
  </div>
)