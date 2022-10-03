import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

type Props = {};
type State = {};

class ContactForm extends Component<Props & RouteComponentProps, State> {
  render(): React.ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="type your message here"
          ></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    );
  }
}

export default ContactForm;
