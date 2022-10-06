import { Component, cloneElement, ReactElement } from 'react';

type Props = {
    children: ReactElement[]
};

type State = {
    activeSlide: number
};

class SlideShow extends Component<Props, State> {
    state = {
        activeSlide: 0
    };
    
    prev = () => {
        this.setState(state => {
            return {
                activeSlide: Math.max( state.activeSlide - 1, 0 )
            };
        });
    }
    
    next = () => {
        this.setState(state => {
            return {
                activeSlide: Math.min( state.activeSlide + 1, this.props.children.length - 1 )
            };
        });
    }

    render() {
        const { children } = this.props;
        const { activeSlide } = this.state;

        return (
            <>
                <div style={ { float: 'right' } }>
                    <button onClick={this.prev}>Previous</button>
                    <button onClick={this.next}>Next</button>
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
    }
};

export default SlideShow;