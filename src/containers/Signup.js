/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { SignUp } from "../actions/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        username: "",
        password: ""
      }
    };
  }
  

  handleSubmit = () => {
    this.props.createUser(this.state.account);
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    this.props.history.push(redirectUrl)
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };

  render() {
    return (
      <main>
        <div className='{}'>
          <form className='{}' onSubmit={this.handleSubmit}>
            <i className="fas fa-jedi mb-4" />
            <h1 className="h3 mb-3 font-weight-normal text-secondary">Please sign up</h1>
            <label className="sr-only" htmlFor="username">Username</label>
            <input type="text" className="form-control mb-2" name="username" placeholder="Username" required="" value={this.state.account.username} onChange={this.handleChange} />
            <label className="sr-only" htmlFor="password">Password</label>
            <input type="password" className="form-control mb-3" name="password" placeholder="Password" required="" value={this.state.account.password} onChange={this.handleChange} />
            <button className="btn btn-lg btn-secondary btn-block mt-3" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">JaviCorp © 2021</p>
          </form>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser: SignUp,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Signup));