import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';
import Nav from '../components/nav';

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signOut: signoutUser })(Nav));
