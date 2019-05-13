import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
      signIn: true,
    };

    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    if (this.state.signIn) {
      this.props.signIn({ email: this.state.email, password: this.state.password, username: this.state.username }, this.props.history);
    } else {
      this.props.signUp({ email: this.state.email, password: this.state.password, username: this.state.username }, this.props.history);
    }
  }

  edit(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // this.props.changePost(Object.assign({}, this.props.post, { [e.target.name]: e.target.value }));
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div className="full-sign">
          You are already signed in!
          Sign out using the link in the navbar (top right).
        </div>
      );
    }

    const signInClass = this.state.signIn ? 'sign-button-active' : 'sign-button';
    const signUpClass = this.state.signIn ? 'sign-button' : 'sign-button-active';

    return (
      <form onSubmit={this.submit} className="full-sign">
        <span className="toggle">
          <button className={signUpClass} type="button" onClick={() => this.setState({ signIn: false })} value="Submit">
            Sign Up
          </button>
          <button className={signInClass} type="button" onClick={() => this.setState({ signIn: true })} value="Submit">
            Sign In
          </button>
        </span>
        <div className="post-header-full">
          {/* <div><img src={this.props.post.cover_url} alt="cover" /></div> */}
          <textarea
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.edit}
          />
          <textarea
            type="username"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.edit}
          />
          <textarea
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.edit}
          />
        </div>
        <div className="buttons">
          <button className="save-button" type="submit" value="Submit">
            <i className="fas fa-sign-in-alt" />
          </button>
        </div>
      </form>
    );
  }
}

export default SignIn;
