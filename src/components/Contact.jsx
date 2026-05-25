import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <span>Contact</span>
        <h1>Reach Mohammad Zaid</h1>
        <p>
          I am available for React.js, front-end, and full-stack opportunities.
          Send a message and I will get back to you.
        </p>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="you@example.com" />
          </div>

          <div>
            <label>Message</label>
            <textarea required placeholder="Tell me about your project..." />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
