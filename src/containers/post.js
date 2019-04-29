import React from 'react';
import marked from 'marked';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: 0 };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postID, this.props.history);
  }

  handleDelete() {
    this.props.handlePostDelete(this.props.id);
  }

  handleEdit() {
    this.setState({ isEditing: 1 });
    this.props.handleEdit(this.props.id);
  }

  handleChange(e) {
    this.props.handlePostChange(e);
  }

  handleSubmit(e) {
    console.log('post is calling submit.');
    this.props.handlePostSubmit(this.props.id, e);
    this.setState({ isEditing: 0 });
  }

  renderPost() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="post">
            <div className="post-header">
              <textarea
                type="text"
                id="edittitle"
                name="editTitle"
                placeholder="Add a new post!"
                value={this.props.editingTitle}
                onChange={this.handleChange}
              />
              <button className="save-button" type="submit" value="Submit">
                <i className="fas fa-save" />
              </button>
            </div>
            <div className="postBody">
              <textarea
                type="text"
                id="editcontent"
                name="editContent"
                placeholder="What do you need to do?"
                value={this.props.editingContent}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div className="post">
          <div className="post-header">
            <h4>{this.props.post.title}</h4>
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
          {/* <p>{this.props.post.text}</p> */}
          <div
            className="postBody"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: marked(this.props.post.text || ''),
            }}
          />
        </div>
      );
    }
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

export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
