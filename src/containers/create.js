// import React, { Component } from 'react';
// import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, changePost, clearPost } from '../actions';
import Create from '../components/create';

const mapStateToProps = state => (
  {
    post: state.post,
  }
);

export default withRouter(connect(mapStateToProps, { submit: createPost, changePost, setup: clearPost })(Create));
