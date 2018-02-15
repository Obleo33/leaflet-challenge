import { connect } from 'react-redux'
import LeafletMap from '../components/LeafletMap'
import { bindActionCreators } from 'redux';
import { saveLocation, addLocation } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { polygonArr: state.PolygonArr };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);