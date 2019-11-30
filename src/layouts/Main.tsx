import * as React from "react";
import {
  GlobalStyle,
  Grid,
  theme,
  GridItem,
  Image,
  List,
  ListItem,
} from "@coterminous/ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MainLayoutQuery } from "../generated-models";
import { useCart } from "react-use-cart";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
}

const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${theme.space.xl};
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Header = styled.header`
  grid-column: span 2;
  padding: 30px;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Logo = styled.div`
  width: 300px;
`;

const Main = ({ children, renderHeader, renderFooter }: Props) => {
  const data: MainLayoutQuery = useStaticQuery(graphql`
    query MainLayout {
      site {
        siteMetadata {
          siteName
        }
      }
      cms {
        productCategories {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  `);

  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <GlobalStyle />

      <MainGrid>
        <aside>
          <Logo>
            <Image
              width={430}
              height={160}
              srcSet={[
                {
                  url:
                    "https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png",
                  width: 430,
                  height: 160,
                },
              ]}
            />
          </Logo>

          <List>
            {data.cms.productCategories.edges.map(
              ({ node: { name, slug } }) => (
                <ListItem>
                  <Link to={slug}>{name}</Link>
                </ListItem>
              )
            )}
          </List>
        </aside>

        <MainContent>
          <div>
            Cart ({totalUniqueItems} - {cartTotal})
          </div>
          {children}
        </MainContent>

        {/* {!!renderFooter && renderFooter} */}
      </MainGrid>
    </>
  );
};

export default Main;
