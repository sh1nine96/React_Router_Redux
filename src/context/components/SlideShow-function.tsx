import { useState, cloneElement, ReactElement } from 'react';

type Props = {
    children: ReactElement[]
};

const SlideShow = ( { children } : Props ) => {
    const [ activeSlide, setActiveSlide ] = useState<number>( 0 );
    
    const prev = () => setActiveSlide( activeSlide => Math.max( activeSlide - 1, 0 ) );
    const next = () => setActiveSlide( activeSlide => Math.min( activeSlide + 1, children.length - 1 ) );

    return (
        <>
            <div style={ { float: 'right' } }>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
            {
                cloneElement( 
                    children[activeSlide], 
                    {
                        page: {
                            current: activeSlide + 1,
                            total: children.length
                        }
                    }
                )
            }
        </>
    );
};

export default SlideShow;