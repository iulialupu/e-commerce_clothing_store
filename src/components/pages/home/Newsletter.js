import React, { useState, useRef } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("");
  const label = useRef(null);

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="newsletter">
      <div className="container">
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <p>
            Subscribe to our Newsletter to receive a special welcome discount
          </p>
          <label htmlFor="name" ref={label}>
            {focus ? "Enter your Email" : " "}
          </label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder={focus ? null : "Enter your Email"}
            onChange={handleChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <button className="btn" type="subbmit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
