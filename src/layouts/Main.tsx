import * as React from "react";
import { ThemeProvider } from "coterminous-styled";

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
}

const Main = ({
  children,
  renderHeader,
  renderSidebar,
  renderAfterMain,
  renderFooter,
}: Props) => (
  <ThemeProvider theme={{ primaryColor: "red", primaryColorInverted: "blue" }}>
    <>
      <div className="wrapper">
        {!!renderHeader && renderHeader}

        <div className="container">
          <div className="row">
            {!!renderSidebar && (
              <aside className="col-lg-3 sidebar_grid hidden-md-down">
                <div className="widget-container widget_desirees-subcategories">
                  <div className="widget-container cat-list">
                    {renderSidebar}
                  </div>
                </div>
              </aside>
            )}

            <div
              className={`col-xs-12 ${
                !!renderSidebar ? "col-lg-9" : "col-lg-12"
              }`}
            >
              <main>{children}</main>

              {!!renderAfterMain && renderAfterMain}
            </div>
          </div>
        </div>
        {!!renderFooter && renderFooter}
      </div>

      <div className="bg__site" />
    </>
  </ThemeProvider>
);

export default Main;
