// components/ContactPage.jsx
import React from 'react';
import styles from '../css/ContactPage.module.css';

const ContactPage = () => {
  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Get in Touch</h2>
      <p className={styles.contactInfo}>
        If you’d like to discuss a project or just want to say hello, feel free to get in touch!
        I’ll try my best to get back to you as soon as possible.
      </p>

      <form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
