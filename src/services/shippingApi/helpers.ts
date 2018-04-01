export interface OmnivaShippingJSON {
  ZIP: string;
  NAME: string;
  TYPE: string;
  A0_NAME: string;
  A1_NAME: string;
  A2_NAME: string;
  A3_NAME: string;
  A4_NAME: string;
  A5_NAME: string;
  A6_NAME: string;
  A7_NAME: string;
  A8_NAME: string;
  X_COORDINATE: string;
  Y_COORDINATE: string;
  SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS_UNTIL: string;
  TEMP_SERVICE_HOURS_2: string;
  TEMP_SERVICE_HOURS_2_UNTIL: string;
  comment_est: string;
  comment_eng: string;
  comment_rus: string;
  comment_lav: string;
  comment_lit: string;
  MODIFIED: string;
}

// getOmnivaShippingLocations($tmp, 'EE')
export function createOmnivaShippingLocations(arr, local) {
  console.log(arr);
  const stateNames = [
    ...new Set(
      arr.map(item => {
        if (item.A0_NAME === local) {
          return item.A1_NAME;
        } else {
          return "other";
        }
      })
    ),
  ].sort();
  const states = stateNames.map(item => {
    return { title: item, locations: [] };
  });

  const shippingLocations = states;

  function stateMap(location) {
    states.map((item, index) => {
      if (item.title === location.A1_NAME) {
        shippingLocations[index].locations.push({
          name: location.NAME,
          address: [
            location.A2_NAME,
            location.A3_NAME,
            location.A4_NAME,
            location.A5_NAME,
            location.A6_NAME,
            location.A7_NAME,
            location.A8_NAME,
          ]
            .filter(item => item !== "NULL")
            .join(", "),
          state: location.A1_NAME,
          service_hours: location.SERVICE_HOURS,
          raw: location,
        });
      }
    });
  }

  arr.map(location => {
    stateMap(location);
  });

  return shippingLocations;
}

// getSmartpostShippingLocations($tmp)
export function createSmartpostShippingLocations(arr) {
  const stateNames = [
    ...new Set(
      arr.map(item => {
        return item.group_name;
      })
    ),
  ].sort();
  const states = stateNames.map(item => {
    return { title: item, locations: [] };
  });

  const shippingLocations = states;

  function stateMap(location) {
    states.map((item, index) => {
      if (item.title === location.group_name) {
        shippingLocations[index].locations.push({
          name: location.name,
          address: [location.city, location.address]
            .filter(item => item !== "NULL")
            .join(", "),
          state: location.group_name,
          service_hours: location.opened,
          raw: location,
        });
      }
    });
  }

  arr.map(location => {
    stateMap(location);
  });

  return shippingLocations;
}
