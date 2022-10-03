import React, { lazy, Suspense } from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import "./app.css";
import Email from "./Email";
const ContactForm = lazy(() => import("./ContactForm"));

// With lazy loading, we can ignore some files to bundle initially when the application is executed. This reduces the application execution time.
// Example: Payment page is loaded only then the place order button is clicked.

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
        <NavLink to={`${match.url}/message`} activeClassName="active">
          Message
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

      <Suspense fallback={<div>Loading....</div>}>
        <Route
          path={`${match.path}/message`}
          render={(props: RouteComponentProps) => <ContactForm {...props} />}
        />
      </Suspense>
    </>
  );
};

export default Contact;
