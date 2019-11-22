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

interface Props {
  children: React.ReactNode;
  renderAfterMain?: React.ReactNode;
  renderHeader?: React.ReactNode;
  renderSidebar?: React.ReactNode;
  renderFooter?: React.ReactNode;
}

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

  return (
    <>
      <GlobalStyle />

      <Grid
        gridTemplateAreas="'sidebar content'"
        gridTemplateColumns="16rem 1fr"
        gridGap={theme.space.xl}
        maxWidth={1680}
        ml="auto"
        mr="auto"
        pt={64}
        pb={64}
        pl={32}
        pr={32}
      >
        {!!renderHeader && renderHeader}

        <GridItem as="aside" area="sidebar">
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
          <List>
            {data.cms.productCategories.edges.map(
              ({ node: { name, slug } }) => (
                <ListItem>
                  <Link to={slug}>{name}</Link>
                </ListItem>
              )
            )}
          </List>
        </GridItem>

        <GridItem as="main" area="content">
          {children}
        </GridItem>

        {!!renderFooter && renderFooter}
      </Grid>
    </>
  );
};

export default Main;
