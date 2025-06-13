import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import CategoryList from "../components/CategoryList";

const containerStyle = {
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "10px"
};
const searchBarStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "1rem 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

export default function BrowseBooksPage() {
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <h2>Browse Books</h2>
        <CategoryList onSelect={(cat) => {
          setCategory(cat);
          navigate(`/books/${cat}`);
        }} />
        <input
          style={searchBarStyle}
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredBooks.length === 0 ? (
          <div>No books found.</div>
        ) : (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </>
  );
}
