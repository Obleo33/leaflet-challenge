const addPoint = (coordinate) => {
  return {
    type: 'ADD_POINT',
    data: coordinate,
  };
};

export { addPoint }