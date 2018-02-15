const initialState = {
  data: [],
};

const PolygonArr = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POINT':
      return [...state, action.data];
    case 'REMOVE_POINT':
      return [...action.data];
    default:
      return state;
  }
};

export default PolygonArr;
