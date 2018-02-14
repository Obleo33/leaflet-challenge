import { connect } from 'react-redux'
import Marker from '../components/Marker'
import { bindActionCreators } from 'redux';
import { addPoint } from '../actions/polygonActions';

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPoint }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Marker);
// import Selected from '../actions/SelectedReducer';
