import * as React from "react";

const ContactMe = () => {
    return (
        <div className="container">
            <h2 className="title has-text-centered">Contact Me</h2>
            <div className="columns">
                <div className="column">
                    <h3 className="subtitle is-5">Channels</h3>
                    <br />
                </div>
                <div className="column">
                    <h3 className="subtitle is-5">Social Media</h3>
                    <br />
                    <div className="icon is-large">
                        <i className="fab fa-facebook fa-3x" />
                    </div>
                    <div className="icon is-large">
                        <i className="fab fa-twitter fa-3x" />
                    </div>
                    <div className="icon is-large">
                        <i className="fab fa-instagram fa-3x" />
                    </div>
                    <div className="icon is-large">
                        <i className="fab fa-linkedin fa-3x" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
