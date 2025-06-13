import React from "react";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategoryList";
import BookCard from "../components/BookCard";
import { books } from "../data/dummyBooks";
import { Link } from "react-router-dom";

const containerStyle = {
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "10px",
  backgroundColor: "#f0f4f8", 
};
const welcomeStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#1e293b",
  textAlign: "center",
};


export default function HomePage() {
  const popularBooks = books.filter((b) => b.popular);
  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <div style={welcomeStyle}>Welcome to the Online Library</div>
        
       
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        <div style={{ marginTop: "2rem" }}>
          <Link to="/books">Browse All Books</Link>
        </div>
      </div>
    </>
  );
}
