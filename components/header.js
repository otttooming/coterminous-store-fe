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
          <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600&subset=cyrillic" rel="stylesheet" />

          <style>{`
            body {
              // color: #333;
            }
          `}</style>
      </Head>

      <header className='container'>
        <div className="row header middle-xs">
          <div className="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-md-offset-0 col-md-3 header__logo">
            <a className="d__block" href="https://www.aadliaare.ee/en"><figure className="aspect-ratio" style={{paddingBottom: '37.209302325581%'}}><img width={430} height={160} className="aspect-ratio__img lazyloaded " alt="Aadli Aare" itemProp="image" sizes="(max-width: 430px) 100vw, 430px" data-src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png" data-srcset="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png 430w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-75x28.png 75w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-300x112.png 300w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-100x37.png 100w" srcSet="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png 430w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-75x28.png 75w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-300x112.png 300w, https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo-100x37.png 100w" src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png" /></figure></a>
          </div>
          <div className="col-md-6 header__search hidden-md-down">
            <form action="https://www.aadliaare.ee/en/" method="get" id="search__form" className="search__form">
              <input type="text" className="search__field" placeholder="Search" defaultValue name="s" id="s" />
              <input type="hidden" name="post_type" defaultValue="product" />
              <select name="product_cat" className="search__select">
                <option value>Categories</option>
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
              <button type="submit" value="Search" className="search__button button">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 250.313 250.313"><path d="M244.186 214.604l-54.38-54.378c-.288-.29-.627-.49-.93-.76 10.7-16.23 16.946-35.66 16.946-56.554C205.822 46.075 159.747 0 102.912 0S0 46.075 0 102.91c0 56.836 46.074 102.912 102.91 102.912 20.895 0 40.323-6.245 56.554-16.945.27.3.47.64.76.93l54.38 54.38c8.168 8.167 21.412 8.167 29.582 0 8.168-8.17 8.168-21.414 0-29.583zM102.91 170.146c-37.133 0-67.235-30.102-67.235-67.235 0-37.133 30.103-67.235 67.236-67.235s67.236 30.103 67.236 67.236c0 37.134-30.103 67.236-67.235 67.236z" fillRule="evenodd" clipRule="evenodd" fill="currentColor" /></svg>
                <span>Search</span>
              </button>
            </form>
          </div>
          <div className="col-sm-9 col-lg-3 header__cart hidden-sm-down align-self-center">
            <a className="cart-links amount" href="https://www.aadliaare.ee/en/ostukorv/" title="View your shopping cart">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 475.084 475.085" className="cart-links__icon"><path d="M365.446 401.998c0 10.092 3.58 18.702 10.71 25.834 7.133 7.14 15.75 10.71 25.846 10.71 10.08 0 18.698-3.57 25.83-10.71 7.14-7.132 10.71-15.742 10.71-25.834s-3.567-18.702-10.71-25.84c-7.132-7.133-15.75-10.705-25.83-10.705-10.096 0-18.713 3.572-25.845 10.704-7.132 7.14-10.71 15.75-10.71 25.84zM469.658 78.51c-3.618-3.617-7.898-5.426-12.848-5.426H113.918c-.193-1.33-.62-3.756-1.287-7.277-.664-3.523-1.186-6.33-1.567-8.425-.383-2.087-1.093-4.61-2.142-7.56-1.046-2.953-2.283-5.287-3.71-6.996-1.425-1.718-3.33-3.19-5.71-4.43-2.376-1.233-5.09-1.853-8.134-1.853h-73.09c-4.95 0-9.233 1.812-12.85 5.424C1.81 45.583 0 49.867 0 54.817s1.81 9.23 5.426 12.846c3.62 3.617 7.902 5.424 12.85 5.424h58.237l50.532 234.976c-.378.76-2.33 4.373-5.852 10.848-3.52 6.477-6.328 12.137-8.42 16.99-2.093 4.86-3.14 8.616-3.14 11.28 0 4.947 1.81 9.23 5.424 12.853 3.62 3.606 7.902 5.42 12.85 5.42h292.348c4.95 0 9.233-1.813 12.848-5.42 3.62-3.62 5.427-7.905 5.427-12.854 0-4.95-1.807-9.234-5.427-12.848-3.614-3.613-7.898-5.427-12.847-5.427h-262.66c4.57-9.138 6.854-15.222 6.854-18.268 0-1.91-.238-4.004-.715-6.283s-1.047-4.805-1.713-7.57c-.667-2.75-1.093-4.798-1.283-6.132l298.075-34.83c4.753-.576 8.658-2.615 11.703-6.14 3.045-3.52 4.564-7.563 4.564-12.134V91.363c-.002-4.948-1.806-9.23-5.426-12.853zM109.632 401.998c0 10.092 3.567 18.702 10.706 25.834 7.14 7.14 15.75 10.71 25.84 10.71 10.086 0 18.7-3.57 25.836-10.71 7.14-7.132 10.71-15.742 10.71-25.834s-3.568-18.702-10.71-25.84c-7.137-7.133-15.75-10.705-25.835-10.705-10.09 0-18.706 3.572-25.843 10.704-7.135 7.14-10.706 15.75-10.706 25.84z" fill="currentColor" /></svg>
              <span className="cart-links__title">Cart</span>
              <span className="cart-links__amount"> 0€</span>
            </a>
            <div className="menu-mobile__toggle button hidden-lg-up">
              <span>Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 302 302"><path d="M0 36h302v30H0zM0 236h302v30H0zM0 136h302v30H0z" fill="currentColor" /></svg>
            </div>
          </div>
        </div>

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