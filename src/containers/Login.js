import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { authenticateUser } from "../actions/auth";


class Login extends Component {
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
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    const auth = this.props.authenticateUser(this.state.account);
    if (auth !== false && redirectUrl !== '/'){
      this.props.history.push({ pathname:redirectUrl, state:{resources: state.from.state.resources}});
    } else if (auth !== false){
      this.props.history.push(redirectUrl);
    }
    this.setState({
      account: {
        username: "",
        password: ""
      }
    });
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
            <h1 className="h3 mb-3 font-weight-normal text-secondary">Please log in</h1>
            <label className="sr-only">Username</label>
            <input type="text" className="form-control mb-2" name="username" placeholder="Username" required="" value={this.state.account.username} onChange={this.handleChange} />
            <label className="sr-only">Password</label>
            <input type="password" className="form-control mb-3" name="password" placeholder="Password" required="" value={this.state.account.password} onChange={this.handleChange} />
            <button className="btn btn-lg btn-secondary btn-block mt-3" type="submit">Log in</button>
            <p className="mt-5 mb-3 text-muted">STAR WARS © 2021</p>
          </form>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateUser,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Login));