import { connect } from 'react-redux';

import Home from '../components/Home';
import * as homeActions from '../modules/home';

const mapStateToProps = (state, ownProps = {}) => {
  return {
    welcomeMessage: state.home.message || ''
  };
};

const mapDispatchToProps = (dispatch, ownProps = {}) => {
  dispatch(homeActions.loadPage());

  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
