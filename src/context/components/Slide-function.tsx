import React, { useContext, ReactNode } from 'react';
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

function Slide( { heading, children, ...restOfProps } : Props ) {
    const { theme } = useContext( ThemeContext );

    let current, total;

    if( restOfProps.page ) {
        current = restOfProps.page.current;
        total = restOfProps.page.total;
    }

    const slide = (
        <div className={`slide slide-${theme}`}>
            <span className="slide-number">{current} / {total}</span>
            <h2 className="heading-text text-center">{heading}</h2>
            <hr />
            <div className="body-text">{children}</div>
        </div>
    );

    return slide;
}

Slide.defaultProps = {
    theme: 'light'
};

export default Slide;