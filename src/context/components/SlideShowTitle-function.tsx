import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import './Slide.css';

type Props = {
    title: string
};

const SlideShowTitle = ( { title } : Props ) => {
    const { theme, toggleTheme } = useContext( ThemeContext );
    
    return <h1 className={`slideshow-title slideshow-title-${theme}`} onClick={toggleTheme}>{title}</h1>
}

export default SlideShowTitle;