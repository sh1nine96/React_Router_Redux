import React, { useState, useCallback } from 'react';
import ThemeContext from './ThemeContext';
import SlideShowTitle from './components/SlideShowTitle-function';
import SlideShow from './components/SlideShow-function';
import Slide from './components/Slide-function';

import './SlideShow-demo.css';

const App = () => {
    const [ theme, setTheme ] = useState<'light' | 'dark'>( 'dark' );

    const toggleTheme = useCallback( () => setTheme( theme => theme === 'light' ? 'dark' : 'light' ), [ setTheme ] );

    return (
        <>
            <ThemeContext.Provider value={ { theme, toggleTheme } }>
                <SlideShowTitle title="Introduction to React" />
                <SlideShow>
                    <Slide heading="Styling in React">
                        <ul style={ { marginTop: '1em' } }>
                            <li>You can provide style using CSS classes</li>
                            <li>You can provide inline styles using a JS object</li>
                        </ul>
                    </Slide>
                    <Slide heading="Component Props">
                        <p>
                            Props are used to pass data to a component instance, in order to customize the UI. The children are also treated as a prop.
                        </p>
                    </Slide>
                </SlideShow>
            </ThemeContext.Provider>
        </>
    );
};

export default <App />