import React from "react";

const CareersScreen = () => {
  return (
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
        <h1 className="display-4">Our Careers</h1>
        <p className="lead">
          We exited to assit you. We will reach out to you soon.
        </p>
        <hr className="my-4" /> 
        <p className="lead">
          Carreers
        </p>
        <p className="lead">
          Carreers
        </p>
        <p className="lead">
          Carreers
        </p>
        <p className="lead">
          Carreers
        </p>              
      </div>
    </div>
  );
};

export default CareersScreen;
