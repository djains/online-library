import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "10px",
  textAlign: "center"
};
const linkStyle = {
  color: "#007bff",
  textDecoration: "underline",
  marginTop: "1rem",
  display: "inline-block"
};

export default function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={linkStyle}>Go to Home</Link>
      </div>
    </>
  );
}
