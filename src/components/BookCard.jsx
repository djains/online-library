import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "10px",
  padding: "1.2rem",
  margin: "1rem 0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  background: "#ffffff",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const cardHoverStyle = {
  transform: "translateY(-4px)",
  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
};

const titleStyle = {
  fontWeight: "600",
  fontSize: "1.2rem",
  color: "#1e293b",
  marginBottom: "0.25rem",
};

const authorStyle = {
  color: "#64748b",
  fontSize: "0.95rem",
  marginBottom: "0.5rem",
};

const infoStyle = {
  fontSize: "0.9rem",
  color: "#374151",
  marginBottom: "0.25rem",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "500",
  marginTop: "0.75rem",
  display: "inline-block",
  transition: "color 0.2s ease",
};

const linkHoverStyle = {
  color: "#1d4ed8",
  textDecoration: "underline",
};

export default function BookCard({ book }) {
  const [hovered, setHovered] = React.useState(false);
  const [linkHovered, setLinkHovered] = React.useState(false);

  return (
    <div
      style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={titleStyle}>{book.title}</div>
      <div style={authorStyle}>by {book.author}</div>
      <div style={infoStyle}>Category: {book.category}</div>
      <div style={infoStyle}>Rating: {book.rating}</div>
      <Link
        to={`/book/${book.id}`}
        style={linkHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
      >
        View Details
      </Link>
    </div>
  );
}
