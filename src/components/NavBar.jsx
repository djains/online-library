
import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "#1e3a8a", 
  color: "#fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
};

const linkContainerStyle = {
  display: "flex",
  gap: "1.5rem",
};

const linkStyle = {
  color: "#e0f2fe",
  textDecoration: "none",
  fontWeight: "600",
  position: "relative",
  padding: "5px 0",
  transition: "color 0.3s ease",
};

const hoverEffectStyle = {
  textDecoration: "underline",
  color: "#93c5fd",
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>📚 Online Library</div>
      <div style={linkContainerStyle}>
        <HoverLink to="/" text="Home" />
        <HoverLink to="/books" text="Browse Books" />
        <HoverLink to="/add" text="Add Book" />
        <a href="https://github.com/djains/online-library.git" style={{color:"white"}}>GITHUB</a>
      </div>
    </nav>
  );
}


function HoverLink({ to, text }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      to={to}
      style={hovered ? { ...linkStyle, ...hoverEffectStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </Link>
  );
}
