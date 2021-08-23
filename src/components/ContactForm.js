import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '', invalidMessage: false };
    }
    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    messageChangeHandler = (event) => {
        let invalidMessageDetected = event.target.value === '';
        this.setState({ message: event.target.value, invalidMessage: invalidMessageDetected });
    }
    render() {
        let message = '';
        if (this.state.invalidMessage) {
            message = <p> Message must be filled in</p>
        }
        return (
            <form>
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
                {message}
            </form>
        );
    }
}

export default ContactForm;