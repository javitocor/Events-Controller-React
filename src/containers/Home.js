import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from '../style/Home.module.css';

class Home extends Component {
  render() {
    const { loggedIn, user } = this.props.auth;
    return (
      <main className={`pt-5 ${style.main}`}>
        <div className={style.content}>
          <div className={`jumbotron pt-5 mb-0 ${style.jumbo}`}>
            <h1 className="display-4">Welcome to Event Handlers!</h1>
            <p className="lead">The place where you can manage all your events!</p>
            <hr className="my-4" />
            <p className="">Folow up all your events and the people attending.</p>
            <div className="lead">
              {!loggedIn && (
                <p className="lead">
                  Routes are protected. You need to 
                  {' '}
                  {' '} 
                  <Link
                    name="login"
                    to="/login"
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                  >
                    Log in
                  </Link> 
                  {' '}
                  or  
                  {' '}
                  {' '}
                  <Link
                    name="signup"
                    to="/signup"
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                  >
                    Sign up
                  </Link>
                </p>
              )}

              {loggedIn && (
                <p className="lead text-white">
                  Welcome 
                  {' '}
                  <strong>
                    {user.username}
                    !
                  </strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Home);
