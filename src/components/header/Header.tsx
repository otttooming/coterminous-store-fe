import * as React from "react";
import Head from "next/head";
import CartButton from "./children/CartButton";
import MainMenu from "./children/MainMenu";
import Logo from "./children/Logo";
import {
  LocationChangeProps,
  ShoppingCartPrice,
} from "../../common/products/typings";

interface Props {
  title: string;
  menuItems: any;
  handleLocationChange: (props: LocationChangeProps) => void;
  price: ShoppingCartPrice | undefined;
}

const Header = ({ title, menuItems, handleLocationChange, price }: Props) => {
  return (
    <header className="container">
      <Head>
        <title>{!!title ? title : ""}</title>
      </Head>

      <div className="row header middle-xs">
        <div className="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-md-offset-0 col-md-3">
          <Logo onLocationChange={handleLocationChange} />
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
          <CartButton onLocationChange={handleLocationChange} price={price} />
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

      {!!menuItems && (
        <div className="row hidden-md-down">
          <div className="col-xs-8">
            <nav className="menu">
              <MainMenu
                items={menuItems.items}
                onLocationChange={handleLocationChange}
              />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
