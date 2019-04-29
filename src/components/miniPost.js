import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MiniPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.postDelete(this.props.id, this.props.history);
  }

  renderPost() {
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
        </div>
        <div className="post-main">
          <img src={this.props.post.cover_url} alt="cover" />
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

export default MiniPost;
