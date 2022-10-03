import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

type Props = {};
type State = {};

class ApplyForm extends Component<Props & RouteComponentProps, State> {
  render(): React.ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" id="phone" />
        </div>
        <button type="submit">Apply now</button>
      </form>
    );
  }
}

export default ApplyForm;
