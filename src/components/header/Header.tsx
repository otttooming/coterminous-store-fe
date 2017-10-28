import * as React from "react";
import Head from "next/head";
import "isomorphic-fetch";
import { withRedux } from "next-redux-wrapper";
import { initStore, store } from "../../store";
import Cart from "../../components/cart";
import styled from "styled-components";

interface Props {
  title: string;
  menuItems: {}[];
}

interface State {}

const TitleH = styled.h1`
  color: red;
  font-size: 50px;
`;

function MainMenu(props) {
  if (!!props.menuItems) {
    const menuItems = props.menuItems.map(item => (
      <li key={item.id} className="menu-item">
        <a href="">{item.title}</a>
      </li>
    ));

    return <ul className="menu">{menuItems}</ul>;
  } else {
    return null;
  }
}

export default class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>
            {!!this.props.title ? this.props.title : ""}This page has a title 🤔
          </title>
          <link
            rel="stylesheet"
            href="https://www.aadliaare.ee/wp-content/themes/desirees/dist/styles/style.min.css?ver=3"
            type="text/css"
            media="all"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600&subset=cyrillic"
            rel="stylesheet"
          />

          <style>{`
            body {
              // color: #333;
              // display: none;
            }
            .loader,
            .loader:after {
              width: 30em;
              height: 30em;
              border-radius: 50%;
            }
            .loader {
              position: absolute;
              top: calc(50% - 22em);
              left: calc(50% - 22em);
              transform: translateZ(0);
              animation: load8 1.1s infinite linear;
              text-indent: -9999em;
              border-top: 5em solid rgba(255, 255, 255, 0.2);
              border-right: 5em solid rgba(255, 255, 255, 0.2);
              border-bottom: 5em solid rgba(255, 255, 255, 0.2);
              border-left: 5em solid #fff;
              font-size: 10px;
              z-index: 9999;
            }
            .loader__dark {
              border-top-color: rgba(0, 0, 0, 0.2);
              border-right-color: rgba(0, 0, 0, 0.2);
              border-bottom-color: rgba(0, 0, 0, 0.2);
            }
            @keyframes load8 {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

          `}</style>
        </Head>

        <header className="container">
          <TitleH>My page</TitleH>
          <div className="row header middle-xs">
            <div className="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-md-offset-0 col-md-3 header__logo">
              <a className="d__block" href="/">
                <figure
                  className="aspect-ratio"
                  style={{ paddingBottom: "37.209302325581%" }}
                >
                  <img
                    width={430}
                    height={160}
                    className="aspect-ratio__img lazyloaded"
                    alt="Aadli Aare"
                    itemProp="image"
                    src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png"
                  />
                </figure>
              </a>
            </div>
            <div className="col-md-6 header__search hidden-md-down">
              <form
                action="https://www.aadliaare.ee/en/"
                method="get"
                id="search__form"
                className="search__form"
              >
                <input
                  type="text"
                  className="search__field"
                  placeholder="Search"
                  name="s"
                  id="s"
                />
                <input type="hidden" name="post_type" defaultValue="product" />
                <select name="product_cat" className="search__select">
                  <option>Categories</option>
                  <option value="eriti-soodsad-tooted">Affordable Items</option>
                  <option value="dildod">Dildos</option>
                  <option value="vibraatorid">Vibrators</option>
                  <option value="abivahendid">Accessories</option>
                  <option value="apteegikaubad">Pharmaceuticals</option>
                  <option value="masturbaatorid">Masturbators</option>
                  <option value="nukud">Sex Dolls</option>
                  <option value="riided">Clothes/Lingerie</option>
                  <option value="geid">For Gays</option>
                  <option value="bdsm">BDSM</option>
                  <option value="kingiideed">Gift Ideas</option>
                  <option value="patareid">Batteries</option>
                </select>
                <button
                  type="submit"
                  value="Search"
                  className="search__button button"
                >
                  <span>Search</span>
                </button>
              </form>
            </div>
            <div className="col-sm-9 col-lg-3 header__cart hidden-sm-down align-self-center">
              <Cart />
              <div className="menu-mobile__toggle button hidden-lg-up">
                <span>Menu</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 302 302"
                >
                  <path
                    d="M0 36h302v30H0zM0 236h302v30H0zM0 136h302v30H0z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="row hidden-md-down">
            <div className="col-xs-8">
              <nav className="menu">
                <MainMenu menuItems={this.props.menuItems.items} />
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
