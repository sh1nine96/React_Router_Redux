import React, { Component } from 'react';
import Dialog from './Dialog';

type Props = { };

type State = {
    isDialogToBeShown: boolean
};

class TermsAndConditions extends Component<Props, State> {
    state = {
        isDialogToBeShown: false
    };

    showDialog = () => {
        this.setState({
            isDialogToBeShown: true
        });
    }
    
    hideDialog = () => {
        this.setState({
            isDialogToBeShown: false
        });
    }

    render() {
        return (
            <section id="terms-and-conditions">
                <p>
                    This is some unimportant stuff on the page which is relegated to behind the dashboard. Nisi ut ipsum nulla officia mollit et nostrud ad. Consectetur est exercitation aute qui minim ea consequat. Eu est et Lorem nisi non minim officia. Nulla exercitation irure dolore esse quis incididunt occaecat pariatur eiusmod ea adipisicing ut ipsum. Consequat ex commodo aliqua ea nostrud aliquip sint quis consectetur non eiusmod cillum non est. Velit laboris sit dolore incididunt incididunt dolor sint nisi excepteur id.
                </p>
                <p>
                    Quis dolore ex voluptate exercitation laboris et deserunt duis in. Cillum dolore mollit labore eu proident culpa nisi id ea proident. Exercitation minim eu magna sint irure est eu eiusmod cupidatat amet esse. Fugiat minim aliqua excepteur et incididunt dolore. Mollit cillum sit quis exercitation. Elit enim consequat et reprehenderit minim elit nisi dolore do eiusmod excepteur. Irure sint enim commodo deserunt officia occaecat nisi officia irure minim proident. Do nisi consequat labore reprehenderit qui. Ullamco officia occaecat incididunt voluptate proident fugiat id sint minim labore. Ullamco qui aliquip laboris ipsum. Ea esse sint esse Lorem officia sit excepteur amet velit sunt. Amet eu dolor nostrud dolor exercitation sunt duis ad commodo. Culpa irure cillum qui Lorem qui ad proident. Officia cillum aliqua duis enim consequat fugiat non tempor voluptate eiusmod cillum sint. Incididunt non nulla laborum nostrud esse non anim ex ipsum aute. Tempor sunt enim tempor dolore sit aliquip fugiat ullamco.
                </p>
                <p>
                    To review terms and conditions, click here.
                    <button onClick={this.showDialog}>Review Terms</button>
                </p>
                {
                    this.state.isDialogToBeShown ? (
                        <Dialog heading="Terms and Conditions">
                            <p>
                                By using this website you agree to the following terms and conditions...
                            </p>
                            <p>
                                Under no circumstance shall nisi culpa fugiat adipisicing dolore nostrud aute sunt. Non ut amet sit tempor nisi. Consequat ex et duis do aute deserunt proident adipisicing ullamco irure et do. Anim non dolore est cillum labore minim dolor exercitation irure eiusmod esse.
                            </p>
                            <div>
                                If you do not agree hit the CANCEL button. If you have read the terms, understood them, and agree, click the OK button.
                                <div className="text-center">
                                    <button onClick={this.hideDialog}>CANCEL</button>
                                    <button onClick={this.hideDialog}>OK</button>
                                </div>
                            </div>
                        </Dialog>
                    ) : null
                }
            </section>
        );
    }
}

export default TermsAndConditions;