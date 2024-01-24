import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import React from 'react'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import SignUpForm from './components/SignUpForm'
import Login from './components/Login'
import Account from './components/Account'
import "./components/Form.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //check if the user is logged in
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
    <div id="main-section">
      <div id="navbar">
        <div id="title">Library</div>
        <Link id="links" to="/account">
          My Account
        </Link>
        <Link id="links" to="/books">
          BookList
        </Link>
        <Link id="links" to="/register">
          Register
        </Link>
        <Link id="links" to="/login">
          Login
        </Link>

        {/* <BookDetails/> */}
      </div>

      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>

    {/* <SignUpForm /> */}
  </>
);
};

export default App
