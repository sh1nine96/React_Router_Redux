import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type Props = {
    heading: string,
    children: ReactNode
}

class Dialog extends React.Component<Props> {
    el = document.createElement( 'div' );

    componentDidMount() {
        document.getElementById( 'dialog-portal' )?.appendChild( this.el );
    }
    
    componentWillUnmount() {
        document.getElementById( 'dialog-portal' )?.removeChild( this.el );
    }

    render() {
        const el = (
            <div className="dialog">
                <div className="dialog-heading text-center">{this.props.heading}</div>
                <div className="dialog-body text-justify">{this.props.children}</div>
            </div>
        );

        return ReactDOM.createPortal( el, this.el );
    }
}

export default Dialog;