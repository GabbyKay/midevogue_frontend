import React, { useState } from "react";
import Footer from "../../footer/Footer";
import Head from "../../header/Head";
import './needhelp.css'
function Needhelp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    // TODO: Send form data to server
  };

  return (
    <div className="needhelp_full_container">
        <Head/>
        <div className="need-help-page">
      <h1 className="need-help-h1">Need Help?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="need-help-btn" type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p className="need-help-p">
          For immediate assistance, please call us at <strong>(+234) 8046079030</strong>.
        </p>
        <p className="need-help-p">
          You can also reach us via email at <a href="mailto:midevogueofficial@gmail.com">midevogueofficial@gmail.com</a>.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Needhelp;
