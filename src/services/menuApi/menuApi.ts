import { fetchRequest } from "../fetchApi/fetchApi";

export async function getMainMenu(api: any) {
  const url = api.buildUrl(
    { paths: [api.WPMENUS, "menus", api.WP_MAIN_MENU_ID] },
    api.SITEURL
  );

  const response = await fetchRequest({ url });
  const { payload } = response;

  const mainMenuItems = payload;

  return mainMenuItems;
}

export async function getSideMenu(api: any) {
  const url = api.buildUrl(
    { paths: [api.WC, "products", "categories"], parameters: ["per_page=100"] },
    api.SITEURL
  );

  const response = await fetchRequest({ url });
  const { payload } = response;

  const subCategoryItems = payload
    .filter((item: any) => item.parent !== 0)
    .map((item: any) => {
      return {
        ...item,
        subCategories: payload.filter((subCategoryItem: any) => {
          return subCategoryItem.parent === item.id;
        }),
      };
    });

  const sideMenuItems = payload
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
