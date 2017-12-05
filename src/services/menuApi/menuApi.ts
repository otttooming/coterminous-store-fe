export async function getMainMenu(api: any) {
  const url = api.buildUrl(
    { paths: [api.WPMENUS, "menus", api.WP_MAIN_MENU_ID] },
    api.SITEURL
  );
  const resp = await fetch(url);
  const mainMenuItems = await resp.json();

  return mainMenuItems;
}

export async function getSideMenu(api: any) {
  const url = api.buildUrl(
    { paths: [api.WC, "products", "categories"], parameters: ["per_page=100"] },
    api.SITEURL
  );
  const resp = await fetch(url);
  const json = await resp.json();

  const subCategoryItems = json
    .filter((item: any) => item.parent !== 0)
    .map((item: any) => {
      return {
        ...item,
        subCategories: json.filter((subCategoryItem: any) => {
          return subCategoryItem.parent === item.id;
        }),
      };
    });

  const sideMenuItems = json
    .filter((item: any) => item.parent === 0)
    .map((item: any) => {
      return {
        ...item,
        subCategories: subCategoryItems.filter((subCategoryItem: any) => {
          return subCategoryItem.parent === item.id;
        }),
      };
    });

  return sideMenuItems;
}
