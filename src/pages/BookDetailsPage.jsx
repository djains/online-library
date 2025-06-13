import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "10px"
};
const titleStyle = {
  fontSize: "2rem",
  fontWeight: "bold"
};
const authorStyle = {
  color: "#555",
  marginBottom: "1rem"
};
const descStyle = {
  margin: "1rem 0"
};
const backBtnStyle = {
  padding: "0.5rem 1rem",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.books.find((b) => b.id === Number(id)));

  if (!book) return <div style={containerStyle}>Book not found.</div>;

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <div style={titleStyle}>{book.title}</div>
        <div style={authorStyle}>by {book.author}</div>
        <div style={descStyle}>{book.description}</div>
        <div>Category: {book.category}</div>
        <div>Rating: {book.rating}</div>
        <button style={backBtnStyle} onClick={() => navigate(-1)}>
          Back to Browse
        </button>
      </div>
    </>
  );
}
