import React from 'react';
import marked from 'marked';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postID, this.props.history);
  }

  handleDelete() {
    this.props.deletePost(this.props.post._id, this.props.history);
  }

  handleEdit() {
    // this.setState({ isEditing: 1 });
    this.props.history.push(`/posts/${this.props.post.id}/edit`);
    // this.props.handleEdit(this.props.id);
  }

  // handleChange(e) {
  //   this.props.handlePostChange(e);
  // }

  // handleSubmit(e) {
  //   console.log('post is calling submit.');
  //   this.props.handlePostSubmit(this.props.id, e);
  //   // this.setState({ isEditing: 0 });
  // }

  renderPost() {
    return (
      <div className="full-post">
        <div>
          <div className="post-header-full">
            <div><img src={this.props.post.cover_url} alt="cover" /></div>
            <h4>{this.props.post.title}</h4>
          </div>
          {/* <p>{this.props.post.text}</p> */}
          <div className="tags-content">
            <div>{this.props.post.tags}</div>
            <div
              className="post-body"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: marked(this.props.post.content || ''),
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <i
            onClick={this.handleDelete}
            tabIndex={-1}
            className="fas fa-trash"
            role="button"
          />
          <i
            onClick={this.handleEdit}
            tabIndex={-1}
            className="fas fa-edit"
            role="button"
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      this.renderPost()
    );
  }
}


const mapStateToProps = state => (
  {
    post: state.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost })(Post));
