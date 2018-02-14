require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  console.log(locations);
  return {
    type: 'STORE_LOCATIONS',
    data: locations,
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


export { fetchAllLocations }
