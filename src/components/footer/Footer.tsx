import * as React from "react";

const Footer = () => (
  <footer className="container container__footer mt1 py1">
    <div className="row">
      <div className="col-md-3 col-sm-4 col-xs-12">
        <div className="textwidget">
          <h1>OÜ Aadli Aare</h1>
          <p>
            Reg. nr. 12708321<br />
            Aadliaare@gmail.com<br />
            +372 58 83 88 85<br />
            Rahu 3a-36, Tartu<br />
            50112, Eesti
          </p>
        </div>
      </div>
      <div className="col-md-9 col-sm-8 col-xs-12">
        <div className="textwidget">
          <a href="https://www.swedbank.ee/">
            <img
              src="https://www.aadliaare.ee/wp-content/uploads/2014/11/swedbank_logo1.png"
              style={{ paddingRight: 15 }}
              alt="Swedbank"
            />
          </a>
          <a href="https://www.omniva.ee/">
            <img
              src="https://www.aadliaare.ee/wp-content/uploads/2014/12/omniva_logo.png"
              style={{ paddingRight: 15 }}
              alt="Omniva"
            />
          </a>
          <a href="http://www.itella.ee/">
            <img
              src="https://www.aadliaare.ee/wp-content/uploads/2014/08/itella.png"
              style={{ paddingRight: 15 }}
              alt="Itella"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
