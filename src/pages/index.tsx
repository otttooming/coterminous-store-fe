import * as React from "react";
import Main from "../layouts/Main";

export default class Index extends React.Component {
  render() {
    return (
      <Main title="Landing">
        <div className="container container__content">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
              <div id="text-24" className="widget-container widget_text">
                <div className="textwidget">
                  <a className="button big w-100 c-warm" href="/products">
                    Erootikapood
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div
                id="simpleimage-3"
                className="widget-container widget_simpleimage"
              >
                <p className="simple-image" />
                <figure
                  className="aspect-ratio"
                  style={{ paddingBottom: "30.081300813008%" }}
                >
                  <img
                    width={1230}
                    height={370}
                    className="img--shadow img--rounded aspect-ratio__img lazyloaded "
                    sizes="(max-width: 1230px) 100vw, 1230px"
                    srcSet="https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page.png 1230w, https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page-75x23.png 75w, https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page-300x90.png 300w, https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page-768x231.png 768w, https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page-440x132.png 440w, https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page-100x30.png 100w"
                    src="https://www.aadliaare.ee/wp-content/uploads/2017/01/aadli_aare_front_page.png"
                  />
                </figure>
                <p />
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/eriti-soodsad-tooted/"
                title="Show Affordable Items"
                className="button medium w-100"
              >
                Affordable Items
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/dildod/"
                title="Show Dildos"
                className="button medium w-100"
              >
                Dildos
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/vibraatorid/"
                title="Show Vibrators"
                className="button medium w-100"
              >
                Vibrators
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/abivahendid/"
                title="Show Accessories"
                className="button medium w-100"
              >
                Accessories
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/apteegikaubad/"
                title="Show Pharmaceuticals"
                className="button medium w-100"
              >
                Pharmaceuticals
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/masturbaatorid/"
                title="Show Masturbators"
                className="button medium w-100"
              >
                Masturbators
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/nukud/"
                title="Show Sex Dolls"
                className="button medium w-100"
              >
                Sex Dolls
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/riided/"
                title="Show Clothes/Lingerie"
                className="button medium w-100"
              >
                Clothes/Lingerie
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/geid/"
                title="Show For Gays"
                className="button medium w-100"
              >
                For Gays
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/bdsm/"
                title="Show BDSM"
                className="button medium w-100"
              >
                BDSM
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/kingiideed/"
                title="Show Gift Ideas"
                className="button medium w-100"
              >
                Gift Ideas
              </a>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a
                href="/tootekategooria/patareid/"
                title="Show Batteries"
                className="button medium w-100"
              >
                Batteries
              </a>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-6 col-md-3 d__flex">
              <div className="bg__common p1 w100">
                <div id="text-32" className="widget-container widget_text">
                  <h2 className="widget-title">WIDE SELECTION</h2>
                  <div className="textwidget" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 d__flex">
              <div className="bg__common p1 w100">
                <div id="text-33" className="widget-container widget_text">
                  <h2 className="widget-title">DISCRETE SERVICE</h2>
                  <div className="textwidget" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 d__flex">
              <div className="bg__common p1 w100">
                <div id="text-35" className="widget-container widget_text">
                  <h2 className="widget-title">CHEAP PRICES</h2>
                  <div className="textwidget" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}
