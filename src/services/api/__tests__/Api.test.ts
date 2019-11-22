import * as api from '../Api';

const urlMinimal = api.buildUrl({}, api.SITEURL);
const mockUrlMinimal = [
  api.SITEURL.host,
  '/wp-json/?',
  `consumer_key=${api.SITEURL.consumerKey}&`,
  `consumer_secret=${api.SITEURL.consumerSecret}`,
].join('');

const urlPaths = api.buildUrl({ paths: [api.WC, 'products'] }, api.SITEURL);
const mockUrlPaths = [
  api.SITEURL.host,
  '/wp-json/',
  `${api.WC}`,
  '/products/?',
  `consumer_key=${api.SITEURL.consumerKey}&`,
  `consumer_secret=${api.SITEURL.consumerSecret}`,
].join('');

const urlParameters = api.buildUrl(
  {
    parameters: [
      'in_stock=true',
      'status=publish',
      'page=' + '1',
      'per_page=16',
    ],
  },
  api.SITEURL,
);
const mockUrlParameters = [
  api.SITEURL.host,
  '/wp-json/?',
  'in_stock=true&status=publish&page=1&per_page=16&',
  `consumer_key=${api.SITEURL.consumerKey}&`,
  `consumer_secret=${api.SITEURL.consumerSecret}`,
].join('');

const urlFull = api.buildUrl(
  {
    paths: [api.WC, 'products'],
    parameters: [
      'in_stock=true',
      'status=publish',
      'page=' + '1',
      'per_page=16',
    ],
  },
  api.SITEURL,
);
const mockUrlFull = [
  api.SITEURL.host,
  '/wp-json/',
  `${api.WC}`,
  '/products/?in_stock=true&status=publish&page=1&per_page=16&',
  `consumer_key=${api.SITEURL.consumerKey}&`,
  `consumer_secret=${api.SITEURL.consumerSecret}`,
].join('');

describe('api.buildUrl() generator', () => {
  it('matches valid minimal, only root json path (wp-json) and no parameters output', () => {
    expect(urlMinimal).toBe(mockUrlMinimal);
  });

  it('matches valid only paths output', () => {
    expect(urlPaths).toBe(mockUrlPaths);
  });

  it('matches valid only parameters output', () => {
    expect(urlParameters).toBe(mockUrlParameters);
  });

  it('matches valid full, with paths and parameters output', () => {
    expect(urlFull).toBe(mockUrlFull);
  });
});
