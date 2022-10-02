import React from "react";
// import {  } from "react-router";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import "./app.css";
import Email from "./Email";

type Props = {};

const Contact = ({ history, location, match }: Props & RouteComponentProps) => {
  return (
    <>
      <h1>Contact</h1>
      <hr />
      <div>
        Contact
        <address>1001, Swarajya Mag Lane, New Delhi, 100700</address>
      </div>
      <div className="navigation-links">
        <NavLink to={`${match.url}/phone`} activeClassName="active">
          Phone
        </NavLink>
        <NavLink to={`${match.url}/email`} activeClassName="active">
          Email
        </NavLink>
      </div>

      <Route
        path={`${match.path}/phone`}
        render={() => <div>+91-123987650</div>}
      />
      <Route
        path={`${match.path}/email`}
        render={(props: RouteComponentProps) => (
          <Email value="help@test.com" {...props} />
        )}
      />
    </>
  );
};

export default Contact;
