import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BookList = () => {
  //List all the books
  const [allBooksList, setAllBooksList] = useState([]);

  //get all the books from the api
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        const results = await response.json();
        setAllBooksList(results.books);
      } catch (error) {
        console.error("Error fetching book list:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <h2>BookList</h2>
      {allBooksList.map((singleBook) => (
        <Link
          to={`/books/${singleBook.id}`}
          key={singleBook.id}
          className="book-link"
        >
          <div className="book-card">
            <div>
              <h3>{singleBook.title}</h3>
              <img
                src={singleBook.coverimage}
                alt={singleBook.title}
                style={{ width: "100px", height: "100px" }}
              />
              <p>{singleBook.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default BookList;