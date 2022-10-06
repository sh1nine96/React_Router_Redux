import React from "react";
import ThemeContext from "../ThemeContext";

import "./Slide.css";

type Props = {
  title: string;
};

class SlideShowTitle extends React.Component<Props> {
  render() {
    const { title } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <h1
            className={`slideshow-title slideshow-title-${theme}`}
            onClick={toggleTheme}
          >
            {title}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default SlideShowTitle;
