import { connect } from 'react-redux'
import Form from '../components/Form'
import { bindActionCreators } from 'redux';
import { saveLocation } from '../actions/locationActions';
import { addLocation } from '../actions/locationActions';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation, addLocation }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);