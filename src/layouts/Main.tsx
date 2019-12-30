import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useCart } from "react-use-cart";
import styled from "@emotion/styled";
import {
  Image,
  List,
  ListItem,
  Heading,
  Box,
  useColorMode,
  Button,
} from "@chakra-ui/core";
import { MainLayoutQuery } from "../types";

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
  hasSidebar?: boolean;
}

const MainContent = styled.main<any>`
  grid-column: ${({ hasSidebar }) => (hasSidebar ? "span 1" : `span 2`)};
  flex: 1;
`;

const Main = ({ children, hasSidebar = true }: Props) => {
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

  const { cartTotal, totalUniqueItems } = useCart();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        maxWidth="1440px"
        mx="auto"
        mb="32px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Image
            width="300px"
            htmlWidth={430}
            htmlHeight={160}
            src="https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png"
          />
        </Link>

        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>

        <div>
          Cart ({totalUniqueItems} - {cartTotal})
        </div>
      </Box>

      <Box
        borderRadius="16px"
        background="#322659"
        maxWidth="1440px"
        mx="auto"
        p="32px"
        display={["flex", "flex", "grid"]}
        gridGap="32px"
        flexDirection="column"
        gridTemplateColumns="240px 1fr"
      >
        {hasSidebar && (
          <Box as="aside">
            <Heading as="h2" mb="24px">
              Categories
            </Heading>
            <List>
              {data.cms.productCategories.edges.map(
                ({ node: { name, slug } }) => (
                  <ListItem key={slug}>
                    <Box as="h3" fontWeight="semibold" mt="8px">
                      <Link to={`/${slug}`}>{name}</Link>
                    </Box>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        )}

        <MainContent hasSidebar={hasSidebar}>{children}</MainContent>
      </Box>
    </>
  );
};

export default Main;
