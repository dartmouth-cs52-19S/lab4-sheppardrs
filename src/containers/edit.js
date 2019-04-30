// import React, { Component } from 'react';
// import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost, changePost } from '../actions';
import Create from '../components/create';

const mapStateToProps = state => (
  {
    post: state.post,
  }
);

export default withRouter(connect(mapStateToProps, { submit: editPost, changePost })(Create));
