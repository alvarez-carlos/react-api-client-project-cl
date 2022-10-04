import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactScreen = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(true);
  };
  return !submitted ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
      }}
    >
      <form
        style={{
          width: "40%",
          display: "flex",
          marginBottom: "60px",
          marginTop: "30px",
          flexDirection: "column",
          justifyContent: "stretch",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "white",
          fontWeight: "700",
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        }}
        onSubmit={submitHandler}
      >
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            You have any questinos?
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        minHeight: "400px",
      }}
    >
      <div
        className="jumbotron"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          fontWeight: "700",
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 className="display-4">Thank you for contacting us!</h1>
        <p className="lead">
          We exited to assit you. We will reach out to you soon.
        </p>
        <hr className="my-4" />
        <p>Back to main page</p>
        <p className="lead">
          <Link className="btn btn-info btn-lg" role="button" to="/">
            Back Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactScreen;
