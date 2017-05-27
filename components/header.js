import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

function MainMenu(props) {
  const menuItems = props.menuItems.map((item) =>
    <li key={item.id} className='menu-item'>
      <a href="">{item.title}</a>
    </li>
  );

  return (
      <ul className='menu'>{menuItems}</ul>
  );
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ini: props,
      page: 1
    }
  }

  render () {
    return (
      <div>
      <Head>
          <title>{this.props.title}This page has a title 🤔</title>
          <link rel='stylesheet' id='desirees-style-css'  href='https://www.aadliaare.ee/wp-content/themes/desirees/dist/styles/style.min.css?ver=3' type='text/css' media='all' />

          <style>{`
            body {
              // color: #333;
            }
          `}</style>
      </Head>

      <header className='container'>
        <div className='row hidden-md-down'>
          <div className='col-xs-8'>
            <nav className='menu'>
              <MainMenu menuItems={this.props.menuItems.items} />
            </nav>
          </div>
        </div>
      </header>

      <div className="bg__site"></div>
    </div>
    )
  }
}