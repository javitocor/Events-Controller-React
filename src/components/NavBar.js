/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions/auth";
import navbar from '../style/Navbar.module.css'


class NavBar extends Component {
  handleLogoutClick = () => {
    this.props.logOut();
    this.props.history.push("/login");
  };

  render(){
    const { loggedIn } = this.props.auth;
    return (
      <nav className="col-sm-12" id={navbar['fixed-sidebar']}>
        <div className="d-flex flex-column justify-content-around align-items-center h-100">
          <div className={navbar.top}>
            <div className={`${navbar.toptop} d-flex justify-content-center align-items-center`}>
              <a href="#"><i className="fas fa-list" /></a>
            </div>
            <div className={`${navbar.topbottom} d-flex justify-content-center align-items-start mt-4`}>
              <i className="fas fa-atom" />
            </div>
          </div>
          <div className={`${navbar.bottom} d-flex justify-content-center align-items-start w-100`}>
            <ul className={`${navbar.bullets} mt-4`}>
              <li className={`${navbar.list1} d-flex justify-content-center align-items-center`}>                
                <Link
                  name="ticketing"
                  to="/ticketing"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  <i className="fas fa-th-large" />
                </Link>
              </li>
              <li className={`${navbar.list} d-flex justify-content-center align-items-center`}> 
                <a href="#"><i className="fas fa-graduation-cap" /></a>
              </li>
              <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><a href="#"><i className="far fa-clipboard" /></a></li>
              <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><a href="#"><i className="fas fa-chart-bar" /></a></li>
              <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><a href="#"><i className="fas fa-money-bill" /></a></li>
              <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><a href="#"><i className="far fa-question-circle" /></a></li>
              {loggedIn && (
                <Link
                  name="logout"
                  onClick={this.handleLogoutClick}
                  to="/"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                  className={`${navbar.list} d-flex justify-content-center align-items-center`}
                >
                  <i className="fas fa-sign-out-alt" />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logOut })(withRouter(NavBar));