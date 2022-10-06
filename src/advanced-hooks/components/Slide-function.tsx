import React, { ReactNode } from 'react';

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
    let current, total;

    if( restOfProps.page ) {
        current = restOfProps.page.current;
        total = restOfProps.page.total;
    }

    const slide = (
        <div className="slide">
            <span className="slide-number">{current} / {total}</span>
            <h1 className="heading-text text-center">{heading}</h1>
            <hr />
            <div className="body-text">{children}</div>
        </div>
    );

    return slide;
}

export default Slide;