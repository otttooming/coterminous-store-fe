export const SITEURL = {
  host: 'https://dev-spiceflow.pantheonsite.io',
  consumerKey: 'ck_a67345603373570cfc213659c53f941e2dc8c64f',
  consumerSecret: 'cs_186c4d5992dab11ceb56059bccf0dc31ea77c37b',
};

export const STATIC_URL = { host: 'http://localhost:3000' };

export const WP = 'wp/v2';
export const WC = 'wc/v2';
export const WPMENUS = 'wp-api-menus/v2';
export const WP_MAIN_MENU_ID = 828;

interface BuildUrlProps {
  paths?: string[];
  parameters?: string[];
}

interface HostProps {
  host: string;
  consumerKey: string;
  consumerSecret: string;
}

export function buildUrl(props: BuildUrlProps, host: HostProps) {
  const { paths = [], parameters = [] } = props;

  const path = [host.host, 'wp-json', ...paths].join('/');

  const parameter = [
    ...parameters,
    `consumer_key=${host.consumerKey}`,
    `consumer_secret=${host.consumerSecret}`,
  ].join('&');

  return `${path}/?${parameter}`;
}
