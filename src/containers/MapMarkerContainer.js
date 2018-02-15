import { connect } from 'react-redux'
import MapMarker from '../components/MapMarker'
import { bindActionCreators } from 'redux';
import { addPoint, fetchPoint } from '../actions/polygonActions';

const mapStateToProps = (state) => {
  return { polygonArr: state.PolygonArr };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPoint, fetchPoint }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
// import Selected from '../actions/SelectedReducer';
