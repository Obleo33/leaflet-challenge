const addPoint = (mapPoint) => {
  return {
    type: 'ADD_POINT',
    data: mapPoint,
  };
};

const removePoint = (polygonArr) => {
  return {
    type: 'REMOVE_POINT',
    data: polygonArr,
  };
};

const fetchPoint = (mapPoint, polygonArr) => {
  const updatedArr = polygonArr.filter(arrPoint => {
    return arrPoint.markerID !== mapPoint.markerID;
  });
  return removePoint(updatedArr);
};

export { addPoint, fetchPoint };