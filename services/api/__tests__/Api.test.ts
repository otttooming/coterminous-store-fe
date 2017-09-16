import * as api from '../Api';

const url = api.buildUrl({ paths: [api.WC, 'products'], parameters: ['in_stock=true', 'status=publish', 'page=' + '1', 'per_page=16'] });
const mockUrl = `${api.SITEURL}/${api.WC}/products?in_stock=true&status=publish&page=1&per_page=16&${api.APISECRET}`;

describe('api.buildUrl() generator', () => {

  it('matches valid output', () => {
    expect(url).toBe(mockUrl);
  });

});
