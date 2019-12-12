import React from "react";
import {Translate, withLocalize} from "react-localize-redux";
import SignupForm from "./SignupForm";

class Signup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container text-center">
                <h3><Translate id="signup.signupbutton">Sign Up</Translate></h3>
                <br/>
                    <SignupForm onSubmit={this.handleSubmit}/>
                    <br/>
            </div>
        );
    }

    handleSubmit = (login,password) =>{
        alert("signing up...");
    }
}

export default withLocalize(Signup);