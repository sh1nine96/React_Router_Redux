import React, { Component } from 'react';

type Props = {
    throwError: boolean
}

declare function foo() : void;

class SampleComponent extends Component<Props> {
    render() {
        const { throwError } = this.props;
        
        // simulate an error
        if( throwError ) {
            foo();
        }

        return (
            <div>
                <h1>SampleComponent</h1>
            </div>
        );
    }
}

export default SampleComponent;