import "./contact.scss";

const EmailGive = () => {
    alert("Email: hamzaaamir6@gmail.com");
}

const Contact = () => {

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-data">
            <h3 className="upper-heading">What's Next?</h3>
            <h2 className="cta-heading">Get In Touch</h2>
            <p className="job-para">
              I'm always looking for new opportunities, my-inbox is always open.
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </p>
            <div className="btn-c">
              <button onClick={EmailGive} className="btn">Say Hello</button>
            </div>

          </div>
            <h5 className="end-note">Built by Hamza Aamir</h5>
        </div>
      </section>
    </>
  );
};

export default Contact;
