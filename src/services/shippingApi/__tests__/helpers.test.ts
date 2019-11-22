import { ShippingLocationItems } from './../shippingApi';
import {
  OmnivaShippingJSON,
  createOmnivaShippingLocations,
} from './../helpers';
import { Countries } from '../../../common/countries/constants';

const omnivaJSON: OmnivaShippingJSON = {
  ZIP: '74594',
  NAME: 'Aegviidu postipunkt',
  TYPE: '1',
  A0_NAME: 'EE',
  A1_NAME: 'Harju maakond',
  A2_NAME: 'Anija vald',
  A3_NAME: 'Aegviidu alev',
  A4_NAME: 'NULL',
  A5_NAME: 'Piibe maantee',
  A6_NAME: 'NULL',
  A7_NAME: '8',
  A8_NAME: 'NULL',
  X_COORDINATE: '25.6065930091524',
  Y_COORDINATE: '59.2884511875073',
  SERVICE_HOURS: 'E-P 10:00-19:00',
  TEMP_SERVICE_HOURS: 'NULL',
  TEMP_SERVICE_HOURS_UNTIL: 'NULL',
  TEMP_SERVICE_HOURS_2: 'NULL',
  TEMP_SERVICE_HOURS_2_UNTIL: 'NULL',
  comment_est: '',
  comment_eng: '',
  comment_rus: '',
  comment_lav: '',
  comment_lit: '',
  MODIFIED: '2018-03-28T14:13:50.000+03:00',
};

const expectedResponse: ShippingLocationItems[] = [
  {
    title: 'Harju maakond',
    locations: [
      {
        name: 'Aegviidu postipunkt',
        address: 'Anija vald, Aegviidu alev, Piibe maantee, 8',
        state: 'Harju maakond',
        service_hours: 'E-P 10:00-19:00',
        raw: {
          ZIP: '74594',
          NAME: 'Aegviidu postipunkt',
          TYPE: '1',
          A0_NAME: 'EE',
          A1_NAME: 'Harju maakond',
          A2_NAME: 'Anija vald',
          A3_NAME: 'Aegviidu alev',
          A4_NAME: 'NULL',
          A5_NAME: 'Piibe maantee',
          A6_NAME: 'NULL',
          A7_NAME: '8',
          A8_NAME: 'NULL',
          X_COORDINATE: '25.6065930091524',
          Y_COORDINATE: '59.2884511875073',
          SERVICE_HOURS: 'E-P 10:00-19:00',
          TEMP_SERVICE_HOURS: 'NULL',
          TEMP_SERVICE_HOURS_UNTIL: 'NULL',
          TEMP_SERVICE_HOURS_2: 'NULL',
          TEMP_SERVICE_HOURS_2_UNTIL: 'NULL',
          comment_est: '',
          comment_eng: '',
          comment_rus: '',
          comment_lav: '',
          comment_lit: '',
          MODIFIED: '2018-03-28T14:13:50.000+03:00',
        },
      },
    ],
  },
];

describe('shippingApi helpers', () => {
  it('should return mapped Omniva shippingLocation response', () => {
    expect(
      createOmnivaShippingLocations([omnivaJSON], Countries.Estonia),
    ).toEqual(expectedResponse);
  });

  it('should return only one state location', () => {
    expect(
      createOmnivaShippingLocations([omnivaJSON], Countries.Estonia).map(
        item => item.title,
      ),
    ).toHaveLength(1);
  });

  it('should return two separate state locations', () => {
    const alteredState = { ...omnivaJSON, A1_NAME: 'Test state' };
    const mockOmnivaShippingLocationsWithTwoStates = [omnivaJSON, alteredState];

    expect(
      createOmnivaShippingLocations(
        mockOmnivaShippingLocationsWithTwoStates,
        Countries.Estonia,
      ).map(item => item.title),
    ).toHaveLength(2);
  });

  it('should not return null values when state is mismatched', () => {
    const alteredState = { ...omnivaJSON, A1_NAME: 'Test state' };
    const mockOmnivaShippingLocationsWithTwoStates = [omnivaJSON, alteredState];

    expect(
      createOmnivaShippingLocations(
        mockOmnivaShippingLocationsWithTwoStates,
        Countries.Estonia,
      )
        .reduce((acc, cur) => [...acc, ...cur.locations], [])
        .filter(item => !item),
    ).toHaveLength(0);
  });
});
