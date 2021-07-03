import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact Me</h2>
            <form>
                
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>

                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="7" />
                </div>

            </form>
        </section>
    )
};

export default Contact;