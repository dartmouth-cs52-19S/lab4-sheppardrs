import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MiniPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id, this.props.history);
  }

  renderPost() {
    return (
      // eslint-disable-next-line prefer-template
      <div className="post">
        <div className="post-header">
          <button type="button" onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}>
            <h4>{this.props.post.title}</h4>
          </button>
          <i
            onClick={this.handleDelete}
            tabIndex={-1}
            className="fas fa-trash"
            role="button"
          />
          <h2>{this.props.post.tags}</h2>
          <h2>{this.props.post.authorName}</h2>
        </div>
        <img src={this.props.post.cover_url} alt="cover" />
        {/* <div className="post-main">
          <img src={this.props.post.cover_url} alt="cover" />
        </div> */}
      </div>
    );
  }

  render() {
    return (
      this.renderPost()
    );
  }
}

export default MiniPost;
