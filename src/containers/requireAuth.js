import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    // if not authenticated redirect to sign in
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signInUp');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signInUp');
      }
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }
  }

  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
