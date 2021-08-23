import React from "react";
import "./contactForm.css";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '', invalidMessage: false, validEmail: true, validName: true };
    }

    nameChangeHandler = (event) => {
        let invalidNameDetected = event.target.value === '';
        this.setState({ name: event.target.value, validName: !invalidNameDetected });
    }
    emailChangeHandler = (event) => {
        // From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ email: event.target.value , validEmail: re.test(String(event.target.value).toLowerCase())});
    }
    messageChangeHandler = (event) => {
        let invalidMessageDetected = event.target.value === '';
        this.setState({ message: event.target.value, invalidMessage: invalidMessageDetected });
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        let message = '';
        if (this.state.invalidMessage) {
            message = <p> Message must be filled in</p>
        }
        if (!this.state.validEmail) {
            message = <p> Email address is invalid</p>
        }
        if (!this.state.validName) {
            message = <p>Name must be filled in</p>
        }
        return (
            <form onSubmit={this.submitHandler}>
                <p>Name:</p>
                <input
                    type='text'
                    onChange={this.nameChangeHandler}
                />
                <p>Email Address:</p>
                <input
                    type='text'
                    onChange={this.emailChangeHandler}
                />
                <p>Message:</p>
                <textarea
                    onChange={this.messageChangeHandler}
                />
                <input type="submit" className="submit-button" value="Submit"/>
                {message}
            </form>
        );
    }
}

export default ContactForm;