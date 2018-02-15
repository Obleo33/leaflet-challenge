import { connect } from 'react-redux'
import MapMarker from '../components/MapMarker'
import { bindActionCreators } from 'redux';
import { addPoint } from '../actions/polygonActions';

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPoint }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
// import Selected from '../actions/SelectedReducer';
