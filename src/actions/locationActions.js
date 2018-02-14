require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations,
  };
};

const saveLocation = (location) => {
  return {
    type: 'SAVE_LOCATION',
    data: location,
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())

      .then(json => dispatch(storeAllLocations(json)));
  };
};

const addLocation = () => {
  return (dispatch) => {
    return fetch('/api/v1/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 
                  Accept: 'application/json',},
    });
  };
};


export { fetchAllLocations, addLocation, saveLocation }
