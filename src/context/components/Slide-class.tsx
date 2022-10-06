import React, { ReactNode } from 'react';
import ThemeContext from '../ThemeContext';

import './Slide.css';

type Props = {
    heading: string,
    page?: {
        current: number,
        total: number
    },
    children: ReactNode
};

class Slide extends React.Component<Props> {    
    render() {
        const { heading, page, children } = this.props;
        let current = 0, total = 0;

        if( page ) {
            current = page.current;
            total = page.total;
        }

        const slide = (
            <ThemeContext.Consumer>
                {
                    ( { theme } ) => (
                        <div className={`slide slide-${theme}`}>
                            <span className="slide-number">{current} / {total}</span>
                            <h2 className="heading-text text-center">{heading}</h2>
                            <hr />
                            <div className="body-text">{children}</div>
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        );

        return slide;
    }
}

export default Slide;