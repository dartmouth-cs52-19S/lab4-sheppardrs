import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinUser, signupUser } from '../actions';
import SignIn from '../components/signIn';

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signIn: signinUser, signUp: signupUser })(SignIn));
