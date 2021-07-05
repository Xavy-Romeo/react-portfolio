import React from 'react';

const Contact = () => {
    return (
        <section>
            <h3 className="section-title">Contact Me</h3>
            <form className="contact-form">
                
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Your name" />
                </div>

                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" placeholder="Your email" />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="7" placeholder="Send me a message here" />
                </div>

                <button type="submit">Send Message</button>

            </form>
        </section>
    )
};

export default Contact;