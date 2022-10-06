import React from "react";
import Slide from "./components/Slide-function";
import SlideShow from "./components/SlideShow-function";

import "./SlideShow-demo.css";

export default (
  <SlideShow>
    <Slide heading="Styling in React" page={{ current: 1, total: 2 }}>
      <ul className="list-unstyled" style={{ marginTop: "1em" }}>
        <li>You can provide style using CSS classes</li>
        <li>You can provide inline styles using a JS object</li>
      </ul>
    </Slide>
    <Slide heading="Component Props" page={{ current: 2, total: 2 }}>
      <p>
        Props are used to pass data to a component instance, in order to
        customize the UI. The children are also treated as a prop.
      </p>
    </Slide>
  </SlideShow>
);
