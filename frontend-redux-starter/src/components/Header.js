import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
      <div className="container">
        <div className="col-8 ">
          <h1>
            <Link to={'/'} className="text-secondary">
              Home
            </Link>
          </h1>
        </div>

        <div className=" d-flex  ">
          <Button
            descrip="Songs"
            link="/songs"
            className="btn btn-info rounded-pill nuevo-post d-block "
          />
          <Button
            descrip="Moveis"
            link="/movies"
            className="btn btn-info rounded-pill nuevo-post d-block  ml-2 px-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
