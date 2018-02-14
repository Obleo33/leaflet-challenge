import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import PolygonArr from './PolygonReducer';

const RootReducer = combineReducers({
  Locations,
  PolygonArr,
});

export default RootReducer;
