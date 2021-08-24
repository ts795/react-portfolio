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

    onBlurHandler = (event) => {
        if (event.target.name === "message" && event.target.value === '') {
            this.setState({ message: event.target.value, invalidMessage: true });
        } else if (event.target.name === "email" && event.target.value === '') {
            this.setState({ email: event.target.value, validEmail: false });
        } else if (event.target.name === "name" && event.target.value === '') {
            this.setState({ name: event.target.value, validName: false });
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ message: '', email: '', name: ''});
    }

    render() {
        let message1 = '';
        let message2 = '';
        let message3 = '';

        if (this.state.invalidMessage) {
            message1 = <p className="contactFormInvalidInput"> Message must be filled in</p>
        }
        if (!this.state.validEmail) {
            message2 = <p className="contactFormInvalidInput"> Email address is invalid</p>
        }
        if (!this.state.validName) {
            message3 = <p className="contactFormInvalidInput">Name must be filled in</p>
        }
        return (
            <form onSubmit={this.submitHandler}>
                <p>Name:</p>
                <input
                    type='text'
                    name="name"
                    onChange={this.nameChangeHandler}
                    onBlur={this.onBlurHandler}
                    value={this.state.name}
                />
                <p>Email Address:</p>
                <input
                    type='text'
                    name="email"
                    onChange={this.emailChangeHandler}
                    onBlur={this.onBlurHandler}
                    value={this.state.email}
                />
                <p>Message:</p>
                <textarea
                    name="message"
                    onChange={this.messageChangeHandler}
                    onBlur={this.onBlurHandler}
                    value={this.state.message}
                />
                <input type="submit" className="submit-button" value="Submit"/>
                {message1}
                {message2}
                {message3}
            </form>
        );
    }
}

export default ContactForm;