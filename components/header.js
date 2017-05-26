import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

function MainMenu(props) {
  const menuItems = props.menuItems.map((item) =>
    <li key={item.id}>
      {item.title}
    </li>
  );

  return (
    <ul>{menuItems}</ul>
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

      <header>
        <MainMenu menuItems={this.props.menuItems.items} />
        <div className="bg__site"></div>
      </header>
    </div>
    )
  }
}