import React, { Component } from 'react';
// import marked from 'marked';

class Create extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
  }

  // for create it will have clearPost to reset the post
  // for edit it can have fetchPost if post is not already set
  componentWillMount() {
    if (this.props.setup) {
      this.props.setup();
    }
  }

  submit(e) {
    e.preventDefault();
    this.props.submit(this.props.history);
  }

  edit(e) {
    e.preventDefault();
    // this.setState({ [e.target.name]: e.target.value });
    this.props.changePost(Object.assign({}, this.props.post, { [e.target.name]: e.target.value }));
  }

  render() {
    return (
      <div className="post">
        <form onSubmit={this.submit} className="addnote">
          <div className="post-header">
            <textarea
              type="text"
              name="title"
              placeholder="title"
              value={this.props.post.title}
              onChange={this.edit}
            />
            <i
              onClick={this.handleDelete}
              tabIndex={-1}
              className="fas fa-trash"
              role="button"
            />
            {/* <i
              onClick={this.handleEdit}
              tabIndex={-1}
              className="fas fa-edit"
              role="button"
            /> */}
          </div>
          <textarea
            // className="postBody"
            type="text"
            name="content"
            placeholder="what?"
            value={this.props.post.content}
            onChange={this.edit}
          />
          {/* <div
            className="postBody"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: marked(this.props.post.text || ''),
            }}
          /> */}
          <button className="save-button" type="submit" value="Submit">
            <i className="fas fa-save" />
          </button>
        </form>
      </div>
    );
  }
}

// class Create extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       content: '',
//       tags: '',
//       cover_url: '',
//     };

//     this.submit = this.submit.bind(this);
//     this.edit = this.edit.bind(this);
//   }

//   submit(e) {
//     e.preventDefault();
//     this.props.submit(this.state, this.props.history);
//   }

//   edit(e) {
//     e.preventDefault();
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     return (
//       <div className="post">
//         <form onSubmit={this.submit} className="addnote">
//           <div className="post-header">
//             <textarea
//               type="text"
//               name="title"
//               placeholder="title"
//               value={this.state.title}
//               onChange={this.edit}
//             />
//             <i
//               onClick={this.handleDelete}
//               tabIndex={-1}
//               className="fas fa-trash"
//               role="button"
//             />
//             {/* <i
//               onClick={this.handleEdit}
//               tabIndex={-1}
//               className="fas fa-edit"
//               role="button"
//             /> */}
//           </div>
//           <textarea
//             // className="postBody"
//             type="text"
//             name="content"
//             placeholder="what?"
//             value={this.state.content}
//             onChange={this.edit}
//           />
//           {/* <div
//             className="postBody"
//             // eslint-disable-next-line react/no-danger
//             dangerouslySetInnerHTML={{
//               __html: marked(this.props.post.text || ''),
//             }}
//           /> */}
//           <button className="save-button" type="submit" value="Submit">
//             <i className="fas fa-save" />
//           </button>
//         </form>
//       </div>
//     );
//   }
// }


export default Create;
