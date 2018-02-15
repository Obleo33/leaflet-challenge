const addPoint = (point) => {
  return {
    type: 'ADD_POINT',
    data: point,
  };
};

const removePoint = (polygonArr) => {
  return {
    type: 'REMOVE_POINT',
    data: polygonArr,
  };
};


const fetchPoint = (coordinate, polygonArr) => {
  
  const updatedArr = polygonArr.filtter(point => point !== coordinate)

  // return dispatch(removePoint(polygonArr));
};



export { addPoint, fetchPoint };
// export const removeFromCollection = (id, collection) => {
//   const newCollection = collection.filter(game => game.id !== id)

//   return dispatch => dispatch(removeCollection(newCollection))
// }

// const fetchAllLocations = () => {
//   return (dispatch) => {
//     return fetch('/locations', {
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then(locations => locations.json())

//       .then(json => dispatch(storeAllLocations(json)));
//   };
// };