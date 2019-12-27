import * as React from "react";
import { theme } from "@coterminous/ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MainLayoutQuery } from "../generated-models";
import { useCart } from "react-use-cart";
import styled from "@emotion/styled";
import {
  DarkMode,
  Image,
  List,
  ListItem,
  Heading,
  Text,
  Box,
} from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
  hasSidebar?: boolean;
}

const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${theme.space.xl};
  max-width: 1440px;
  margin: 0 auto;
  /* background: #333; */
  border-radius: 16px;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Header = styled.header`
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContent = styled.main<any>`
  margin-top: ${theme.space.l};
  grid-column: ${({ hasSidebar }) => (hasSidebar ? "span 1" : `span 2`)};
  flex: 1;
`;

const Logo = styled.div`
  width: 300px;
`;

const Main = ({
  children,
  hasSidebar = true,
  renderHeader,
  renderFooter,
}: Props) => {
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
      <Header>
        <Logo>
          <Image
            htmlWidth={430}
            htmlHeight={160}
            src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png"
          />
        </Logo>

        <div>
          Cart ({totalUniqueItems} - {cartTotal})
        </div>
      </Header>

      <DarkMode>
        <MainGrid>
          {hasSidebar && (
            <Box as="aside" pl="24px" pr="24px">
              <Heading as="h2" mb="24px">
                Categories
              </Heading>
              <List>
                {data.cms.productCategories.edges.map(
                  ({ node: { name, slug } }) => (
                    <ListItem>
                      <Box as="h3" fontWeight="semibold" mt="8px">
                        <Link to={slug}>{name}</Link>
                      </Box>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          )}

          <MainContent hasSidebar={hasSidebar}>{children}</MainContent>
        </MainGrid>
      </DarkMode>
    </>
  );
};

export default Main;
