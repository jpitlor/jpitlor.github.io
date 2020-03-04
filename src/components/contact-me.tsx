import * as React from "react";

const ContactMe = () => {
    return (
        <div className="container">
            <h2 className="title has-text-centered">Contact Me</h2>
            <div className="container">
                <br />
                <div className="level">
                    <div className="icon is-large level-item">
                        <i className="far fa-envelope fa-3x" />
                    </div>
                    <div className="icon is-large level-item">
                        <i className="far fa-phone fa-3x" />
                    </div>
                    <div className="icon is-large level-item">
                        <i className="fab fa-facebook fa-3x" />
                    </div>
                    <div className="icon is-large level-item">
                        <i className="fab fa-twitter fa-3x" />
                    </div>
                    <div className="icon is-large level-item">
                        <i className="fab fa-instagram fa-3x" />
                    </div>
                    <div className="icon is-large level-item">
                        <i className="fab fa-linkedin fa-3x" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
