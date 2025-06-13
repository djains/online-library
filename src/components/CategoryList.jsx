import React from "react";
import { categories } from "../data/dummyBooks";

const catListStyle = {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  margin: "1.5rem 0",
};

const baseItemStyle = {
  padding: "0.5rem 1rem",
  background: "#e0f2f1", 
  borderRadius: "20px",
  fontWeight: "600",
  color: "#004d40", 
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
};

const hoverStyle = {
  background: "#b2dfdb",
  transform: "scale(1.05)",
};

export default function CategoryList({ onSelect }) {
  return (
    <div style={catListStyle}>
      {categories.map((cat) => (
        <HoverablePill key={cat} category={cat} onSelect={onSelect} />
      ))}
    </div>
  );
}


function HoverablePill({ category, onSelect }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={hovered ? { ...baseItemStyle, ...hoverStyle } : baseItemStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect && onSelect(category)}
    >
      {category}
    </div>
  );
}
