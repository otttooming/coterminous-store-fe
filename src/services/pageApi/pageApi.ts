import * as api from "../api/Api";
import * as frontMatter from "front-matter";
import { fetchRequest, FETCH_TYPE } from "../fetchApi/fetchApi";
import { LANGUAGE } from "../../common/products/constants";

export interface PageProps {
  attributes: any;
  body: string;
}

export async function getPage(
  page: string,
  language: string = LANGUAGE.DEFAULT
) {
  try {
    const url = `${
      api.STATIC_URL.host
    }/static/content/${page}/${language.toLowerCase()}.md`;
    const options = { type: FETCH_TYPE.TEXT };

    const response = await fetchRequest({ url, options });
    const parsedFrontMatter = frontMatter(response.payload);

    const data: PageProps = {
      attributes: parsedFrontMatter.attributes,
      body: parsedFrontMatter.body,
    };

    return data;
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}
