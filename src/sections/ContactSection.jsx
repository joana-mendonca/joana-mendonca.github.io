
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactSection.css";

function ContactSection() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setError("");
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setSent(true);
                form.current.reset();
            }, (error) => {
                setError("Failed to send message. Please try again later.");
            });
    };

    return (
        <section id="contact-section">
            <div className="section-title">
                <h1>Contact</h1>
                <div className="bar"></div>
            </div>
            <div className="section-body">
                <h2>Let's connect and start something great, tailored just for you.</h2>
                {sent && <div style={{color: 'green', textAlign: 'center', marginBottom: '16px'}}>Thank you! Your message has been sent.</div>}
                {error && <div style={{color: 'red', textAlign: 'center', marginBottom: '16px'}}>{error}</div>}
                <form className="contact-body" ref={form} onSubmit={sendEmail}>
                    <div className="contact-input">
                        <h4>Name</h4>
                        <input type="text" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="contact-input">
                        <h4>Email</h4>
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="contact-input">
                        <h4>Message</h4>
                        <textarea name="message" placeholder="Your Message" rows="6" required style={{width: '100%', maxWidth: '738px', borderRadius: '16px', padding: '12px', border: '1px solid var(--borders)', backgroundColor: 'var(--main-color)'}}></textarea>
                    </div>
                    <div className="contact-submit-wrapper">
                        <button id="submit" type="submit" className="contact-submit-btn">Send</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default ContactSection;

