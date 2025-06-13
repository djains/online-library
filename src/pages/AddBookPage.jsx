import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { addBook } from "../redux/booksSlice";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "10px"
};
const labelStyle = {
  display: "block",
  margin: "1rem 0 0.5rem 0",
  fontWeight: "bold"
};
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "5px",
  border: "1px solid #ccc"
};
const btnStyle = {
  marginTop: "1.5rem",
  padding: "0.7rem 1.5rem",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
const errorStyle = {
  color: "red",
  fontSize: "0.9rem"
};

export default function AddBookPage() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: ""
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5) {
      setError("Rating must be a number between 0 and 5.");
      return;
    }
    dispatch(addBook({ ...form, id: Date.now(), rating: Number(form.rating) }));
    navigate("/books");
  }

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Title</label>
          <input style={inputStyle} name="title" value={form.title} onChange={handleChange} />
          <label style={labelStyle}>Author</label>
          <input style={inputStyle} name="author" value={form.author} onChange={handleChange} />
          <label style={labelStyle}>Description</label>
          <textarea style={inputStyle} name="description" value={form.description} onChange={handleChange} />
          <label style={labelStyle}>Rating (0-5)</label>
          <input style={inputStyle} name="rating" value={form.rating} onChange={handleChange} />
          <label style={labelStyle}>Category</label>
          <input style={inputStyle} name="category" value={form.category} onChange={handleChange} />
          {error && <div style={errorStyle}>{error}</div>}
          <button style={btnStyle} type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
}
