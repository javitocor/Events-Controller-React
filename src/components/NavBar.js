import React from 'react';
import navbar from '../style/Navbar.module.css'


const NavBar = () => {
  return (
    <nav className="col-sm-12" id={navbar['fixed-sidebar']}>
      <div className="d-flex flex-column justify-content-around align-items-center h-100">
        <div className={navbar.top}>
          <div className={`${navbar.toptop} d-flex justify-content-center align-items-center`}>
            <i className="fas fa-list" />
          </div>
          <div className={`${navbar.topbottom} d-flex justify-content-center align-items-start mt-4`}>
            <i className="fas fa-globe-europe" />
          </div>
        </div>
        <div className={`${navbar.bottom} d-flex justify-content-center align-items-start w-100`}>
          <ul className={`${navbar.bullets} mt-4`}>
            <li className={`${navbar.list1} d-flex justify-content-center align-items-center`}><i className="fas fa-th-large" /></li>
            <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><i className="fas fa-graduation-cap" /></li>
            <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><i className="far fa-clipboard" /></li>
            <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><i className="fas fa-chart-bar" /></li>
            <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><i className="fas fa-money-bill" /></li>
            <li className={`${navbar.list} d-flex justify-content-center align-items-center`}><i className="far fa-question-circle" /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;