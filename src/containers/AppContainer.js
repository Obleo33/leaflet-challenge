import '../style/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllLocations } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data, polygonArr: state.PolygonArr };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
